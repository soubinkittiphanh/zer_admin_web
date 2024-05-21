
<template>
  <div class="gradient-background">
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-row align="center">
      <v-col cols="12">
        <!-- <v-card-title> ປ່ຽນລະຫັດຜ່ານໃໝ່ </v-card-title> -->
        <v-card-text>
          <h2 style="color: #b48811">ຊື່</h2>
          <v-text-field
            v-model="member.name"
            required
            outlined
          ></v-text-field>
          <h2 style="color: #b48811">ເບີໂທ*</h2>
          <v-text-field
            v-model="member.tel"
            required
            outlined
          ></v-text-field>
          <h2 style="color: #b48811">ລະຫັດຜ່ານ*</h2>
          <v-text-field
            v-model="member.password"
            required
            outlined
          ></v-text-field>
          <v-btn
            block
            variant="outlined"
            @click="submitForm"
            class="custom-button"
            rounded
          >
            {{ update ? 'ບັນທຶກ' : 'ເພີ່ມ' }}
          </v-btn>
        </v-card-text>
      </v-col>
    </v-row>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>
  
  <script>
import {
  swalSuccess,
  swalError2,
  confirmSwal,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
} from '~/common'
export default {
  layout: 'user',
  data() {
    return {
      update: false,
      passwordSvg: require('~/assets/icons/usergradient/password.svg'),
      isLoading: false,
      member: {
        id: null,
        name: '',
        tel: '',
        password: '',
        isActive: true,
      },
      accountList: null,
      message: null,
    }
  },
  computed: {},
  async created() {

  },
  methods: {

    async deleteAccount(account) {
      this.update = true
      this.accountInfo.id = account.id
      this.accountInfo.isActive = false
      confirmSwal(
        this.$swal,
        `ທ່ານແນ່ໃຈ ທີ່ຈະລົບ ບັນຊີ ${account.accountNumber} ?`,
        async () => {
          try {
            const response = await this.$axios.put(
              `api/account/update/${this.accountInfo.id}`,
              this.accountInfo
            )
            await this.loadEntry()
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          } catch (error) {
            console.log('Error: ', error)
            swalError2(
              this.$swal,
              'Error',
              'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
            )
          }
        }
      )
    },
    touchAccount(account) {
      this.update = true
      this.accountInfo.id = account.id
      this.accountInfo.accountName = account.accountName
      this.accountInfo.accountNumber = account.accountNumber
    },
    formatBankAccountNumber(account) {
      // Ensure the input is a string
      const accountStr = account.toString()
      // Use a regular expression to match groups of four digits
      return accountStr.replace(/(\d{4})(?=\d)/g, '$1 ')
    },
    validateEntry() {
      if (this.member.tel.length == 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາປ້ອນເບີໂທ')
        return false
      }
      if (this.member.password.length < 4) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາປ້ອນລະຫັດຜ່ານ ຂັ້ນຕ່ຳ 4 ໂຕ')
        return false
      }

      return true
    },

    async submitForm() {
      // Simulate API call to send reset link
      await this.createEntry()
    },
    async createEntry() {
      // Simulate API call
      if (!this.validateEntry()) return
      if (this.isLoading) return
      const api = this.update
        ? `api/member/update/${this.accountInfo.id}`
        : `api/member/create`
      this.isLoading = true
      if (this.update) {
        try {
          const response = await this.$axios.put(api, this.member)
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
        } catch (error) {
          console.log('Error: ', error)
          swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
        }
      } else {
        try {
          const response = await this.$axios.post(api, this.member)
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
        } catch (error) {
          console.log('Error: ', error)
          swalError2(this.$swal, 'Error', `ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ \n ຢູ່ເຊີລົງທະບຽນແລ້ວ`)
        }
      }
      this.isLoading = false
    },
  }
}
</script>
  
  <style scoped>
.message {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #e9e9e9;
  text-align: center;
}
.gradient-background {
  /* height: 50px; */
  background: -moz-linear-gradient(top, #1b222c 0%, #531516 100%);
  /* position: relative; */
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
}
.v-text-field--outlined >>> fieldset {
  /* border-color: -moz-linear-gradient(top, #b48811 0%, #bb9b49 100%); */
  /* border-color: rgba(192, 0, 250, 0.986); */
  border: 1px solid transparent; /* Set initial border to transparent */
  border-image: linear-gradient(
    to right,
    #b48811,
    #ebd197
  ); /* Gradient border */
  border-radius: 20px;
  border-image-slice: 1; /* Ensure the entire border is covered by the gradient */
}
.custom-button {
  margin-bottom: 20px; /* Add spacing above the button */
  background: -moz-linear-gradient(top, #b48811 0%, #bb9b49 100%);
}
</style>
  