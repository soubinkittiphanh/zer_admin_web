
<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">

            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ຈັດການເມນູ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-row>
                        <v-col cols="3">
                            <v-text-field :disabled="!isCreate" v-model="form.code" label="* Code" required
                                :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field v-model="form.name" label="* ຊື່" required :rules="nameRules"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.llname" label="* ຊື່ LL"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="form.remark" label="remark"></v-text-field>
                        </v-col>
                        <v-col cols="2" align-self="center">
                            <v-icon color="primary">{{ form.icon }}</v-icon>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="form.icon" label="icon"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-autocomplete item-text="name" item-value="id" :items="menuLineList" label="ເມນູຍ່ອຍ*"
                                v-model="menuLineSelected">
                            </v-autocomplete>
                            <v-btn size="large" variant="outlined" @click="addMenuLine" class="primary" rounded>
                                <span class="mdi mdi-note-plus-outline"></span>
                                ເພີ່ມ ເມນູຍ່ອຍ
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-checkbox v-model.number="form.isActive" label="Is Active"></v-checkbox>
                </v-form>
                <div>
                    <v-row justify="center" align="center">
                        <v-divider></v-divider>
                        <div class="mx-2">ເມນູຍ່ອຍທີ່ ອານຸຍາດໃນການນຳໃຊ້</div>
                        <v-divider></v-divider>
                    </v-row>
                    <v-row no-gutters>
                        <v-chip v-for="menu in form.menuLines" :key="menu.id" class="ma-2" color="warning"
                            variant="outlined" @click="removeMenuLine(menu)">
                            {{ menu.id }} - {{ menu.name }}
                        </v-chip>
                    </v-row>
                </div>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
                <v-btn color="primary" rounded variant="text" @click="commitRecord">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
export default {
    props: {
        isCreate: {
            type: Boolean,
            require: true,
            default: true,
        },
        recordId: {
            type: Number,
            require: false,
            default: 0,
        }
    },
    data() {
        return {
            form: {
                code: '',
                menuLines: [],
                name: '',
                llname: '',
                icon: '',
                remark: '',
                isActive: true
            },
            menuLineList: [],
            menuLineSelected: 1,
            isloading: false,
            nameRules: [
                value => !!value || 'Name is required',
                value => (value && value.length <= 100) || 'Name must be less than 20 characters'
            ],
        };
    },
    async created() {
        this.loadEntry();
        this.loadMenuLine();
    },
    methods: {
        removeMenuLine(menu) {
            const idx = this.form.menuLines.indexOf(menu)
            this.form.menuLines.splice(idx, 1);
        },
        addMenuLine() {
            if (!this.menuLineSelected) return
            const newMenuLine = this.menuLineList.find(el => el.id == this.menuLineSelected)
            console.log(`Authority ${newMenuLine.id} len ${this.form.menuLines.length}`);
            
            if (this.form.menuLines.length == 0) {
                console.log(`TEHERE IS NO MENULINE`);
                this.form.menuLines.push(newMenuLine)
            } else if (this.form.menuLines == 'undefined') {
                this.form.menuLines.push(newMenuLine)
            } else {
                const menu = this.form.menuLines.find(el => el.id == this.menuLineSelected)
                console.log(`ADD menu line ${menu}`)
                if (!menu) this.form.menuLines.push(newMenuLine)
            }
            // this.form.menuLines.splice(idx, 1);
        },
        async commitRecord() {
            if (this.$refs.form.validate() && !this.isloading) {
                // Implement form submission logic here
                this.isloading = true
                let api = this.isCreate ? 'api/menuHeader/create' : `api/menuHeader/update/${this.recordId}`
                console.log("API => ", api);
                if (this.isCreate) {
                    await this.$axios.post(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                } else {
                    await this.$axios.put(api, this.form).then(response => {
                        this.refreshData()
                        return swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                    }).catch(error => {
                        console.log("Error: ", error);
                        return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                    })
                }
                this.isloading = false
            }

        },
        async loadEntry() {
            console.log(`===> Update form record load`);
            if (this.recordId && !this.isCreate) {
                await this.$axios.get(`api/menuHeader/find/${this.recordId}`).then(response => {
                    // this.form.name = response.data["name"]
                    // this.form.code = response.data["code"]
                    // this.form.isActive = response.data["isActive"]
                    this.form = response.data
                }).catch(error => {
                    console.log("Cannot fetch data " + error);
                })
            }

        },
        async loadMenuLine() {
            console.log(`===> Update form record load`);
            if (this.recordId && !this.isCreate) {
                await this.$axios.get(`api/menuLine/find`).then(response => {
                    this.menuLineList = response.data
                }).catch(error => {
                    console.log("Cannot fetch data " + error);
                })
            }

        },
        refreshData() {
            this.$emit('reload-data')
        }
    },
    computed: {
        // Add any necessary computed properties here
    }
};
</script>
