
<template>
    <div>
        <v-dialog v-model="ticketPreviewDialog" max-width="524">
            <div :key="previewDialogKey">
                <v-card class="pa-2">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-row>ວັນທີ: {{ customerForm.txn_date }} </v-row>
                                <v-row>ຮ້ານ: {{ currentTerminal['location']['company']['name'] }}</v-row>
                                <v-row>ເບີໂທ: {{ currentTerminal['location']['company']['tel'] }}</v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-row>ຜູ້ຮັບ: {{ customerForm.name }}</v-row>
                                <v-row>ໂທ: {{ customerForm.tel }}</v-row>
                                <v-row>ຂົນສົ່ງ: {{ currentShipping }}</v-row>
                                <v-row>ບ່ອນສົ່ງ: {{ customerForm.address }} - {{ currentGeo }}</v-row>
                                <v-row v-if="currentShipping != 'RIDER'">ຄ່າຝາກ: {{
                                    customerForm.shipping_fee_by.includes('destination') ? 'ປາຍທາງ' :
                                    'ຕົ້ນທາງ'
                                }}</v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row v-for="prod in cartOfProduct" :key="prod['id']">
                            <!-- <v-col cols="5">{{ prod['pro_name'] }}</v-col>
                            <v-col cols="3">{{ formatNumber(prod['localPrice']) }}</v-col>
                            <v-col cols="4">{{ prod['qty'] }}</v-col> -->
                            {{ prod['pro_name'] }}
                            <v-spacer></v-spacer>
                            {{ currentPayment == 'COD' ? formatNumber(prod['localPrice']) + ' X ' : '' }}
                            {{ prod['qty'] }}
                        </v-row>
                        <v-row v-if="customerForm.discount > 0 && currentPayment == 'COD'">
                            ສ່ວນຫລຸດ
                            <v-spacer></v-spacer>
                            - {{ formatNumber(customerForm.discount) }}
                        </v-row>
                        <v-row v-if="customerForm.rider_fee > 0">
                            ຄ່າສົ່ງ
                            <v-spacer></v-spacer>
                            {{ formatNumber(customerForm.rider_fee) }}
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row v-if="currentPayment == 'COD' || currentShipping == 'RIDER'">
                            <v-spacer></v-spacer>
                            ລວມ({{ currentPayment }}): {{ formatNumber(ticketTotal) }}
                        </v-row>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn rounded color="warning" @click="ticketPreviewDialog = false">Cancel</v-btn>
                        <v-btn rounded color="primary" @click="submit">Post</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>

        <v-card>
            <v-card-title>
                <v-row>
                    <v-chip class="ma-2" color="primary" label text-color="white">
                        <v-icon start>mdi-label</v-icon>
                        ຂໍ້ມູນການຈັດສົ່ງ
                    </v-chip>
                    <v-spacer></v-spacer>
                </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <!-- <v-form @submit.prevent="previewTicket"> -->
                <v-form>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field type="date" label="ວັນທີ*" v-model="customerForm.txn_date"
                                hint="ເດຶອນ/ວັນ/ປີ 12/31/2023"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.name" label="ຊືລູກຄ້າ"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.tel" label="*ເບີໂທລູກຄ້າ"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.address" label="*ບ່ອນສົ່ງ"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete item-text="abbr" item-value="id" :items="geographyList" label="ແຂວງ*"
                                v-model="customerForm.geoId"></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-radio-group v-model="customerForm.shipping_fee_by" row align="center">
                                <v-label>ຄ່າຝາກ:</v-label>
                                <v-radio label="ຕົ້ນທາງ" value="source"></v-radio>
                                <v-radio label="ປາຍທາງ" value="destination"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-autocomplete item-text="name" item-value="id" :items="shippingList" label="ຂົນສົ່ງ*"
                                v-model="customerForm.shippingId"></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete item-text="name" item-value="id" :items="riderList" label="Rider*"
                                v-model="customerForm.riderId"></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.rider_fee" label="ຄ່າສົ່ງ"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">

                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete item-text="payment_code" item-value="id" :items="paymentList" label="ການຊຳລະ*"
                                v-model="paymentSelected"></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="customerForm.discount" label="ສ່ວນຫລຸດ"></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn rounded @click="previewTicket" color="primary">Print preview</v-btn>
                <v-spacer></v-spacer>
                <v-btn rounded @click="caputreStateOfDeliveryForm" color="warning">Close</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
  
<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { getFormatNum,swalError2 } from '~/common'
export default {
    name: 'delivery-form',

    async created() {
        // ************ Load the delivery info form from state *************
        //  this.confirmEntries = this.$store.state.listOfConfirmPaymentOrder.map(order => ({ ...JSON.parse(JSON.stringify(order)) }));
        this.customerForm = JSON.parse(JSON.stringify(this.$store.state.customerForm))
        console.log(`Customer information load from statem \n${JSON.stringify(this.customerForm)}`);
        const today = new Date().toISOString().substr(0, 10);
        this.customerForm.txn_date = today;
        console.log(`PRODUCT ${this.cartOfProduct[0]['pro_name']}`);
        await this.loadRider()
        await this.loadGeo()
        await this.loadShipping()
        await this.loadPayment()
        this.paymentSelected = this.currentSelectedPayment
    },
    beforeDestroy() {
        console.log(`Before close dialog...`);
    },
    watch: {
        paymentSelected(value) {
            console.log(`New data payment selected ${value}`);
            this.addSelectedPayment(value)
        }
    },
    computed: {
        generateCustomerObjec() {
            const customerInfo = {
                name: this.customerForm.name,
                branch: this.currentTerminal['location']['company']['name'],
                branchTel: this.currentTerminal['location']['company']['tel'],
                tel: this.customerForm.tel,
                shippingFeeBy: this.customerForm.shipping_fee_by.includes('destination') ? 'ປາຍທາງ' : 'ຕົ້ນທາງ',
                address: this.customerForm.address + ' - ' + this.currentGeo,
                shipping: this.currentShipping,
                payment: this.currentPayment,
                riderFee: this.customerForm.rider_fee,
                geoId: this.customerForm.geoId,
            }
            return customerInfo;
        },
        ticketTotal() {
            let total = 0;
            for (const iterator of this.cartOfProduct) {
                total += iterator['localPrice'] * iterator['qty']
            }
            return (total + (+this.customerForm.rider_fee)) - this.customerForm.discount;
        },
        currentTerminal() {

            const terminalInfo = this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal);
            return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
        },
        currentGeo() {
            const geo = this.geographyList.find(el => el.id == this.customerForm.geoId)
            if (geo == undefined) return ''
            return geo['description']
        },
        currentShipping() {
            const shipping = this.shippingList.find(el => el.id == this.customerForm.shippingId)
            if (shipping == undefined) return ''
            return shipping['name']
        },
        currentPayment() {
            const payment = this.paymentList.find(el => el.id == this.currentSelectedPayment)
            if (payment == undefined) return ''
            return payment['payment_code']
        },
        ...mapGetters(['currentSelectedLocation', 'cartOfProduct', 'currenctSelectedCategoryId', 'findAllProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findSelectedTerminal', 'findAllTerminal', 'findAllLocation']),
    },
    data() {
        return {
            geographyList: [],
            paymentList: [],
            previewDialogKey: 1,
            ticketPreviewDialog: false,
            riderList: [],
            shippingList: [],
            ticketPreviewDialog: false,
            paymentSelected: 1,
            // TODO: Manage this data in vuex state
            customerForm: {
                name: '',
                tel: '',
                address: '',
                rider_fee: 0,
                txn_date: null,
                shipping_fee_by: 'destination',
                shippingId: 1,
                riderId: 1,
                geoId: 1,
                discount: 0,
            }
        }
    },
    methods: {
        ...mapActions(['addSelectedPayment', 'assignCustomerFormAction']),
        submit() {
            // handle form submission
            console.log(this.customerForm)
            const payload = {
                customerForm: this.customerForm,
                customerInfo: this.generateCustomerObjec
            }
            this.caputreStateOfDeliveryForm()
            this.$emit('post-transaction', payload)
        },
        caputreStateOfDeliveryForm() {
            this.assignCustomerFormAction(this.customerForm)
            this.$emit('close-dialog')
        },
        formatNumber(val) {
            return getFormatNum(val)
        },
        previewTicket() {
            if(! this.customerForm.tel) return   swalError2(this.$swal, "ກະລຸນາໃສ່ເບີໂທ")
            if(! this.customerForm.address) return   swalError2(this.$swal, "ກະລຸນາໃສ່ທີ່ຢູ່")
            this.previewDialogKey += 1;
            this.ticketPreviewDialog = true

        },
        async loadRider() {
            this.$axios
                .get('/api/rider/find')
                .then((res) => {
                    this.riderList = res.data
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        async loadPayment() {
            this.isloading = true;
            this.paymentList = []
            await this.$axios
                .get('/api/paymentMethod/find')
                .then((res) => {
                    this.paymentList = res.data
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        async loadGeo() {
            this.$axios
                .get('/api/geography/find')
                .then((res) => {
                    this.geographyList = res.data
                    for (const iterator of this.geographyList) {
                        iterator['abbr'] += ' - '.concat(iterator['description'])
                    }
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        async loadShipping() {
            this.$axios
                .get('/api/shipping/find')
                .then((res) => {
                    this.shippingList = res.data
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        }
    }
}
</script>
  