
<template>
  <div class="gradient-background">
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-row align="center">
      <v-col cols="12">
        <!-- <v-card-title> ປ່ຽນລະຫັດຜ່ານໃໝ່ </v-card-title> -->
        <v-card-text>
          <div v-if="accountList">
            <v-btn
              v-for="account in accountList"
              :key="account.id"
              block
              variant="outlined"
              style="padding-top: 30px; padding-bottom: 30px"
              class="custom-button"
              @click="touchAccount(account)"
              rounded
            >
              <!-- <img :src="passwordSvg" height="80" style="text-align: center" /> -->
              <span class="icon mr-2">
                <img
                  height="30"
                  :src="require('~/assets/icons/usergradient/account.svg')"
                  alt="password icon"
                />
              </span>
              <h4 style="color: white">
                {{ formatBankAccountNumber(account.accountNumber) }}
                <br />
                {{ account.accountName }}
              </h4>
              <v-spacer></v-spacer>
              <span class="icon mr-2">
                <img
                  height="30"
                  :src="require('~/assets/icons/usergradient/delete.svg')"
                  alt="password icon"
                  @click="deleteAccount(account)"
                />
              </span>
            </v-btn>
            <v-btn
              block
              style="padding-top: 30px; padding-bottom: 30px"
              class="custom-button"
              rounded
            >
              <!-- <img :src="passwordSvg" height="80" style="text-align: center" /> -->
              <span class="icon mr-2">
                <img
                  height="30"
                  :src="require('~/assets/icons/usergradient/account.svg')"
                  alt="password icon"
                />
              </span>
              <h4 style="color: white">
                {{ formatBankAccountNumber(accountInfo.accountNumber) }}
                <br />
                {{ accountInfo.accountName }}
              </h4>
            </v-btn>
          </div>
          <h2 style="color: #b48811">ເລກບັນຊີ*</h2>
          <v-text-field
            v-model="accountInfo.accountNumber"
            required
            outlined
          ></v-text-field>
          <h2 style="color: #b48811">ຊື່ບັນຊີ*</h2>
          <v-text-field
            v-model="accountInfo.accountName"
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
            {{ update ? 'ບັນທຶກ' : 'ເພີ່ມບັນຊີ' }}
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
      accountInfo: {
        id: null,
        accountNumber: '',
        accountName: '',
        isActive: true,
        bankId: 2,
        memberId: 1,
      },
      accountList: null,
      message: null,
    }
  },
  computed: {},
  async created() {
    await this.loadEntry()
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
      if (this.accountInfo.accountNumber.length == 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາປ້ອນເລກບັນຊີ')
        return false
      }
      if (this.accountInfo.accountName.length == 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາປ້ອນຊື່ບັນຊີ')
        return false
      }

      return true
    },

    async submitForm() {
      // Simulate API call to send reset link
      await this.createAccount()
    },
    async createAccount() {
      // Simulate API call
      if (!this.validateEntry()) return
      if (this.isLoading) return
      const api = this.update
        ? `api/account/update/${this.accountInfo.id}`
        : `api/account/create`
      this.isLoading = true
      if (this.update) {
        try {
          const response = await this.$axios.put(api, this.accountInfo)
          await this.loadEntry()
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
        } catch (error) {
          console.log('Error: ', error)
          swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
        }
      } else {
        try {
          const response = await this.$axios.post(api, this.accountInfo)
          await this.loadEntry()
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
        } catch (error) {
          console.log('Error: ', error)
          swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
        }
      }
      this.isLoading = false
    },
    async loadEntry() {
      // Simulate API call
      if (this.isLoading) return
      const api = `api/account/find/member/${1}`
      this.isLoading = true
      try {
        const response = await this.$axios.get(api)
        this.accountList = response.data
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      } catch (error) {
        console.log('Error: ', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ໃນການດຶງຂໍ້ມູນບັນຊີ')
      }
      this.isLoading = false
    },
  },
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
  