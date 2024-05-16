
<template>
  <v-app>
    <div class="login-container">
      <!-- <h2 class="primary">ເຂົ້າສູ່ລະບົບ</h2> -->
      <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <loading-indicator> </loading-indicator>
      </v-dialog>
      <form @submit.prevent="submitLogin">
        <!-- <label for="email" style="color: white">ເບີໂທລະສັບ:</label> -->
        <v-text-field
          v-model="mem_id"
          label="ເບີໂທ"
          name="email"
          prepend-inner-icon="mdi-account-tie-hat"
          class="icon-color-custom custom-label-color"
          outlined
        >
        </v-text-field>
        <v-text-field
          v-model="mem_password"
          label="ລະຫັດຜ່ານ"
          type="password"
          name="password"
          prepend-inner-icon="mdi-lock"
          class="icon-color-custom custom-label-color"
          outlined
        >
        </v-text-field>
        <v-btn
          rounded
          class="primary login-button"
          x-large
          block
          dark
          @click.prevent="submitLogin"
          type="submit"
        >
          ເຂົ້າສູ່ລະບົບ
          <v-icon> mdi mdi-login</v-icon>
        </v-btn>
        <span style="color: white"> ຍັງບໍ່ທັນມີບັນຊີ? </span>
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          ສະໝັກສະມາຊິກ ><v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </form>
    </div>
  </v-app>
</template>
  
  
<script>
import { swalError2 } from '~/common'
export default {
  layout: 'member',
  data() {
    return {
      isLoading: false,
      mem_id: '',
      mem_password: '',
      errorMessage: '',
    }
  },
  methods: {
    async submitLogin() {
      console.log('Submitting:', this.email, this.password)
      // Here you would typically handle the login logic, possibly calling an API
      if (this.isLoading) return
      try {
        this.isLoading = true
        this.errorMessage = ''
        const response = await this.$auth.loginWith('local', {data:{
          "mem_id": this.mem_id,
          "mem_pwd": this.mem_password,
        }})

        if (response.status !== 200) {
          this.isLoading = false
          return swalError2(
            this.$swal,
            'Error',
            'ບໍ່ສາມາດ ລັອກອິນ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
          )
        }
        if (response.data.accessToken) {
          console.log(`LOGIN COMPLETED`)
          this.$router.push('/member/home') 
        } else {
          console.log('No token')
          swalError2(this.$swal, 'Error', 'ໄອດີ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ')
        }
        console.log(response)
      } catch (err) {
        console.log(err)
        swalError2(this.$swal, 'Error', 'ໄອດີ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ')
      }
      this.isLoading = false
    },
    async userLogin() {},
  },
}
</script>
  
  <style>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Makes the container take at least the full height of the viewport */
  width: 100%; /* Full width */
  background: -moz-linear-gradient(top, #1b222c 0%, #531516 100%);
  /* background: transparent; */
  /* Full viewport height */
  height: 100vh;
}

.login-button {
  margin-bottom: 20px; /* Add spacing above the button */
  background: -moz-linear-gradient(top, #b48811 0%, #bb9b49 100%);
}

h1 {
  margin-bottom: 20px; /* Add some space below the header */
}
.icon-color-custom .v-icon {
  color: white; /* You can use any color */
}
.custom-label-color .v-label {
  color: white; /* Change the color as needed */
}
</style>