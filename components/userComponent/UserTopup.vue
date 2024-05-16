
<template>
  <div class="text-center">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card class="pa-4">
      <v-card-title style="color: #b48811">
        <img :src="txnSvg" height="60" style="text-align: center" />
        <!-- <v-chip class="ma-0" color="primary" label text-color="white"> -->
        <!-- <v-icon start>mdi-label</v-icon> -->
        ຮ້ອງຂໍ
        <h1>
          {{ txnType == 'CR' ? 'ຝາກເງິນ' : 'ຖອນເງິນ' }}
        </h1>
        <!-- </v-chip> -->
      </v-card-title>
      <v-card-text>
        <v-autocomplete
          item-text="accountNumber"
          item-value="id"
          :items="accountList"
          label="ເລືອກບັນຊີ*"
          v-model="transaction.accountId"
        ></v-autocomplete>
        <v-text-field
          v-model="transaction.amount"
          label="ຈຳນວນເງິນ*"
          required
          v-comma-thousand
          outlined
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="warning" rounded variant="text" @click="commitRecord">
          ຍົກເລີກ
        </v-btn>
        <v-btn color="primary" rounded variant="text" @click="commitRecord">
          ຢືນຢັນ
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
import { mapActions, mapGetters } from 'vuex'
import commaThousand from '@/plugins/comma-thousand'
export default {
  name: 'transactionRequest',
  directives: {
    commaThousand,
  },
  props: {
    search: '',
    txnType: {
      type: String,
      default: 'CR',
    },
    recordId: {
      type: Number,
      require: false,
      default: 0,
    },
  },
  data() {
    return {
      txnSvg: require('~/assets/icons/usergradient/txnicon.svg'),
      transaction: {
        code: this.txnType,
        name: 'Sample Account',
        amount: 100,
        rate: 1.0,
        closingBalance: 0,
        isActive: false,
        accountId: 1,
      },
      accountList: null,
      isloading: false,
    }
  },
  async created() {
    await this.loadEntry()
  },
  methods: {
    async loadEntry() {
      // Simulate API call
      if (this.isLoading) return
      const api = `api/account/find/member/${1}`
      this.isLoading = true
      try {
        const response = await this.$axios.get(api)
        this.accountList = response.data
        this.transaction.accountId = this.accountList[0]['id']
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      } catch (error) {
        console.log('Error: ', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ໃນການດຶງຂໍ້ມູນບັນຊີ')
      }
      this.isLoading = false
    },
    formatNumber(value) {
      return getFormatNum(value)
    },
    refreshData() {
      this.$emit('reload-data')
    },
    async commitRecord() {
      if (this.isloading) return
      const api = `api/ft/create`
      this.isloading = true
      try {
        const response = await this.$axios.post(api, this.transaction)
        this.refreshData()
        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      } catch (error) {
        console.log('Error: ', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
      }
      this.isloading = false
    },
  },
  computed: {},
}
</script>
