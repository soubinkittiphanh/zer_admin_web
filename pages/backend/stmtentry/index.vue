<template>
  <div class="gradient-background text-left">
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
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
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-detailsx
            />
            <v-text-field
              v-model="accountNumber"
              append-icon="mdi-magnify"
              label="ເລກບັນຊີ"
              single-line
              hide-detailsx
            />
          </v-col>
          <v-col cols="6" class="text-left"> </v-col>
          <v-col cols="6" class="text-right">
            <v-btn
              size="large"
              variant="outlined"
              @click="statement"
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
        v-if="statementEntry"
        :headers="headers"
        :search="search"
        :items="statementEntry"
      >
        <template v-slot:[`item.createdAt`]="{ item }">
          {{ item.createdAt.split('.')[0] }}
        </template>
        <template v-slot:[`item.account`]="{ item }">
          {{ item.account.accountNumber }} <br />
          ເບີໂທ: {{ item.account.member.tel }} <br />
          ທະນາຄານ: {{ item.account.bank.abbr }}
        </template>
        <template v-slot:[`item.code`]="{ item }">
          {{ item.code == 'CR' ? 'ຝາກ' : 'ຖອນ' }}
        </template>
        <template v-slot:[`item.amount`]="{ item }">
          {{ numberWithCommas(item.amount) }}
        </template>
        <template v-slot:[`item.closingBalance`]="{ item }">
          {{ numberWithCommas(item.closingBalance) }}
        </template>
        <template v-slot:[`item.createdAtTime`]="{ item }">
          {{ item.createdAt.split('.')[0] }}
        </template>
        <template v-slot:[`item.authorise`]="{ item }">
          <span :style="!item.isActive ?`color: red;`:`color: green;`">
            {{ item.isActive ? 'ອະນຸມັດແລ້ວ' : 'ຄ້າງອະນຸມັດ' }}
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
      statementEntry: [],
      componentCancelFormKey: 1,
      headers: [
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'createdAt',
          sortable: true,
        },
        {
          text: 'ເລກບັນຊີ',
          align: 'left',
          value: 'account',
          sortable: true,
        },
        {
          text: 'ຝາກ-ຖອນ',
          align: 'right',
          value: 'code',
          sortable: true,
        },
        {
          text: 'ຈຳນວນ',
          align: 'right',
          value: 'amount',
          sortable: true,
        },
        {
          text: 'ສະຖານະ',
          align: 'end',
          value: 'authorise',
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
    await this.statement()
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
    async statement() {
      if (this.isLoading) return
      const api = `api/ft/findAll`

      this.isLoading = true
      try {
        const date = {
          startDate: this.fromDate,
          endDate: this.toDate,
          accountNumber: this.accountNumber,
        }
        const response = await this.$axios.get(api, { params: { date } })
        this.statementEntry = response.data
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
      this.statement()
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
