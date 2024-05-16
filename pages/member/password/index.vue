
<template>
  <div class="gradient-background">
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-row align="center">
      <v-col cols="12">
        <!-- <v-card-title> ປ່ຽນລະຫັດຜ່ານໃໝ່ </v-card-title> -->
        <v-card-text>
          <h2 style="color: #b48811">ລະຫັດຜ່ານເກົ່າ*</h2>
          <v-text-field
            v-model="oldpass"
            required
            outlined
            type="password"
          ></v-text-field>
          <h2 style="color: #b48811">ລະຫັດຜ່ານໃຫມ່*</h2>
          <v-text-field
            v-model="newpass"
            required
            outlined
            type="password"
          ></v-text-field>
          <h2 style="color: #b48811">ຢືນຢັນລະຫັດຜ່ານໃຫມ່*</h2>
          <v-text-field
            class="custom-placeholer-color"
            v-model="confpass"
            required
            outlined
            type="password"
          ></v-text-field>
          <v-btn
            block
            variant="outlined"
            @click="sendResetLink"
            class="custom-button"
            rounded
          >
            ຢືນຢັນ
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
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
} from '~/common'
export default {
  layout: 'user',
  data() {
    return {
      isLoading: false,
      oldpass: '',
      newpass: '',
      confpass: '',
      message: null,
    }
  },
  methods: {
    validatePassword() {
      if (this.oldpass.length == 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາໃສ່ລະຫັດຜ່ານເກົ່າ')
        return false
      }
      if (this.newpass.length == 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາໃສ່ລະຫັດຜ່ານໃຫມ່')
        return false
      }
      if (this.confpass.length == 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາໃສ່ລະຫັດຢືນຢັນ')
        return false
      }
      if (this.confpass != this.newpass ) {
        swalError2(this.$swal, 'Error', 'ລະຫັດໃຫມ່ ແລະ ລະຫັດຢືນຢັນບໍ່ຕົງກັນ')
        return false
      }
      if (this.confpass.length<4) {
        swalError2(this.$swal, 'Error', 'ລະຫັດຕ້ອງ ມີ 4 ໂຕຂື້ນໄປ')
        return false
      }
      return true
    },
    async submitForm() {
      // Simulate API call to send reset link
      try {
        // Replace with your actual API call
        await this.sendResetLink(this.email)
        this.message = 'A reset link has been sent to your email address.'
      } catch (error) {
        this.message = 'Failed to send reset link. Please try again later.'
      }
    },
    async sendResetLink(email) {
      // Simulate API call
      if (!this.validatePassword()) return
      if (this.isLoading) return
      const api = `api/auth/reset`
      this.isLoading = true
      try {
        const entry = {
          mem_id: 1,
          mem_pwd: this.oldpass,
          mem_newpass: this.newpass,
          mem_confpass: this.confpass,
        }
        const response = await this.$axios.post(api, entry)
        this.statementEntry = response.data
        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      } catch (error) {
        console.log('Error: ', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
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
  height: 50px;
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
  