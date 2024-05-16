<template>
  <div class="gradient-background text-left">
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <!-- <v-col cols="6">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <v-date-picker
                v-model="fromDate"
                no-title
                @input="menu1 = false"
              ></v-date-picker>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="fromDateLabel"
                  label="ຈາກວັນທີ:"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  @blur="fromDate = parseDate(fromDateLabel)"
                  v-on="on"
                ></v-text-field>
              </template>
            </v-menu>

            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <v-date-picker
                v-model="toDate"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="toDateLabel"
                  label="ຫາວັນທີ:"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  @blur="toDate = parseDate(toDateLabel)"
                  v-on="on"
                ></v-text-field>
              </template>
            </v-menu>
          </v-col> -->
          <v-col cols="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-detailsx
            />
          </v-col>
          <v-col cols="6" class="text-left"> </v-col>
          <v-col cols="6" class="text-right">
            <v-btn
              size="large"
              variant="outlined"
              @click="loadEntry"
              class="primary"
              rounded
            >
              <span class="mdi mdi-cloud-download"></span>
              ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text> </v-card-text>

      <v-data-table
        v-if="dataEntry"
        :headers="headers"
        :search="search"
        :items="dataEntry"
      >

        <template v-slot:[`item.primaryac`]="{ item }">
          {{ item.accounts.length>0? item.accounts[0]['accountNumber']:'No account' }} 
        </template>
        <template v-slot:[`item.code`]="{ item }">
          {{ item.code == 'CR' ? 'ຝາກ' : 'ຖອນ' }}
        </template>
        <template v-slot:[`item.isActive`]="{ item }">
          <span :style="!item.isActive ?`color: red;`:`color: green;`">
            {{ item.isActive ? 'ໃຊ້ງານ' : 'ບໍ່ເຄື່ອນໄຫວ' }}
          </span>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import {
  swalSuccess,
  swalError2,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
} from '~/common'
export default {
  layout: 'user',
  middleware: 'auths',
  data() {
    return {
      accountNumber: null,
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      isLoading: false,
      search: '',
      dataEntry: [],
      componentCancelFormKey: 1,
      headers: [
        {
          text: 'ເບີໂທ',
          align: 'center',
          value: 'tel',
          sortable: true,
        },
        {
          text: 'ຊື່',
          align: 'left',
          value: 'name',
          sortable: true,
        },
        {
          text: 'ບັນຊີຫລັກ',
          align: 'left',
          value: 'primaryac',
          sortable: true,
        },
        {
          text: 'ສະຖານະ',
          align: 'end',
          value: 'isActive',
          sortable: false,
        },
      ],
      fromDate: getFirstDayOfMonth(),
      toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      fromDateLabel: this.formatDate(getFirstDayOfMonth()),
      toDateLabel: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },
  async created() {
    await this.loadEntry()
  },
  watch: {
    fromDate(val) {
      console.log(`FROM DATE WATCHER VAL ${val}`)
      this.fromDateLabel = this.formatDate(this.fromDate)
      // this.statement()
    },
    toDate(val) {
      console.log(`TO DATE WATCHER ${this.toDate}`)
      this.toDateLabel = this.formatDate(this.toDate)
      // this.statement()
    },
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.fromDate)
    },
  },

  methods: {
    async loadEntry() {
      if (this.isLoading) return
      const api = `api/member/find`

      this.isLoading = true
      try {
   
        const response = await this.$axios.get(api)
        this.dataEntry = response.data
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      } catch (error) {
        console.log('Error: ', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
      }
      this.isLoading = false
    },
    async authorise(id) {
      if (this.isLoading) return
      const api = `api/ft/update/${id}`
      this.isLoading = true
      try {
        const response = await this.$axios.put(api, { isActive: true })
        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      } catch (error) {
        console.log('Error: ', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
      }
      this.loadEntry()
      this.isLoading = false
    },
    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    whatsappLink(item) {
      const tel = item.cusTel.trim()
      const completeTel = tel.substring(tel.length - 8)
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent(
        'ສະບາຍດີ ລູກຄ້າ '
      )}`
    },
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    formatDate(date) {
      if (!date) return null
      console.log('DATE FORMAT METHOD1: ' + date)
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      console.log('DATE PARSE METHOD1: ' + date)
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0') // Months are 0-indexed
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}
.gradient-background {
  height: 50px;
  background: -moz-linear-gradient(top, #1b222c 0%, #531516 100%);
}
table {
  width: 100%;
  border-collapse: collapse; /* Ensure borders are collapsed for a clean look */
}
th,
td {
  padding: 12px; /* Consistent padding for both headers and data cells */
  text-align: left; /* Align text to the left for headers and data cells */
  border-bottom: 1px solid #ddd; /* Add a border to the bottom of cells */
}
th {
  background-color: #f4f4f4; /* Light background color for headers */
}
.custom-button {
  margin-bottom: 20px; /* Add spacing above the button */
  background: -moz-linear-gradient(top, #b48811 0%, #bb9b49 100%);
}
</style>
