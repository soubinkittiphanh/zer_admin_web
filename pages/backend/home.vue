<template>
  <v-app>
    <div
      class="gradient-background"
      style="position: relative; height: 100%; width: 100vw"
    >
      <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <loading-indicator> </loading-indicator>
      </v-dialog>
      <v-dialog v-model="topupForm" hide-overlay width="300">
        <user-topup :key="txnKey" :txnType="txnType"> </user-topup>
      </v-dialog>
      <v-row class="ma-1" justify="center">
        <v-card class="ma-1 custom-card" @click="register">
          <v-card-text style="color: white; text-align: center">
            ລົງທະບຽນຜູ້ໃຊ້
            <br />
            <img :src="registerSvg" height="80" style="text-align: center" />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card" @click="memberList">
          <v-card-text style="color: white; text-align: center">
            ລູກຄ້າທັງຫມົດ
            <br />
            <img :src="offlineSvg" height="80" style="text-align: center" />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card" @click="fundstransfer">
          <v-card-text style="color: white; text-align: center">
            ຄຳສະເຫນີ
            <br />
            <img
              :src="chatEntry.length > 0 ? unreadSvg : querySvg"
              height="80"
              style="text-align: center"
              @click="() => {}"
            />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card" @click="statement">
          <v-card-text style="color: white; text-align: center">
            ການເຄື່ອນໄຫວບັນຊີ
            <br />
            <img :src="findSvg" height="80" style="text-align: center" />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card" @click="resetpassword">
          <v-card-text style="color: white; text-align: center">
            ລະຫັດຜ່ານ
            <br />
            <img :src="passwordSvg" height="80" style="text-align: center" />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card" @click="logoff">
          <v-card-text style="color: white; text-align: center">
            ອອກຈາກລະບົບ
            <br />
            <img :src="logoffSvg" height="80" style="text-align: center" />
          </v-card-text>
        </v-card>
      </v-row>
    </div>
    <!-- Bottom navigation bar -->
    <!-- Bottom navigation bar -->
  </v-app>
</template>
  
  <script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
import UserTopup from '~/components/userComponent/UserTopup.vue'
export default {
  components: { UserTopup },
  layout: 'user',
  middleware: 'auths',
  name: 'home',
  data() {
    return {
      registerSvg: require('~/assets/icons/usergradient/admin/register.svg'),
      onlineSvg: require('~/assets/icons/usergradient/admin/online.svg'),
      offlineSvg: require('~/assets/icons/usergradient/admin/offline.svg'),
      querySvg: require('~/assets/icons/usergradient/admin/query.svg'),
      unreadSvg: require('~/assets/icons/usergradient/admin/unreadIB.svg'),
      findSvg: require('~/assets/icons/usergradient/admin/find.svg'),
      passwordSvg: require('~/assets/icons/usergradient/password.svg'),
      logoffSvg: require('~/assets/icons/usergradient/logoff.svg'),
      activeTab: null,
      isLoading: false,
      topupForm: false,
      txnKey: 1,
      txnType: 'CR',
      chatEntry: [],
      intervalId: null
    }
  },
  async created() {
  },
  async mounted() {
   
    this.startFetchingData()
  },
  beforeDestroy() {
    this.stopFetchingData()
  },
  computed: {},
  methods: {
    async logoff() {
      await this.$auth.logout()
      this.$router.push('/backend')
    },
    startFetchingData() {
      // Fetch data immediately on component mount
      this.statementEntry()

      // Set up the interval to fetch data every 1 minute (60000 milliseconds)
      this.intervalId = setInterval(this.statementEntry, 10000)
    },
    stopFetchingData() {
      // Clear the interval when the component is destroyed
      if (this.intervalId) {
        clearInterval(this.intervalId)
      }
    },
    async statementEntry() {
      if (this.isLoading) return
      const api = `api/ft/find/inactive`
      this.isLoading = true
      try {
        const response = await this.$axios.get(api)
        this.chatEntry = response.data
        // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
      } catch (error) {
        console.log('Error: ', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
      }
      this.isLoading = false
    },
    async register() {
      this.$router.push('/backend/register')
    },
    async resetpassword() {
      this.$router.push('/backend/password')
    },
    async memberList() {
      this.$router.push('/backend/memberlist')
    },
    navigateTo(routeName) {
      this.$router.push({ name: routeName })
    },
    fundstransfer(menu) {
      this.$router.push('/backend/fundstransfer')
    },
    statement() {
      this.$router.push('/backend/stmtentry')
    },
  },
}
</script>

<style scoped>
.myfooter {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  /* Adjust this to the height of the footer */
  background-color: #f0f0f0;
  padding: 20px;
}
.custom-card {
  align-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid transparent; /* Set initial border to transparent */
  border-image: linear-gradient(
    to right,
    #b48811,
    #ebd197
  ); /* Gradient border */
  border-image-slice: 1; /* Ensure the entire border is covered by the gradient */
  background-color: transparent; /* Set background color to transparent if needed */
  color: white;
}
.gradient-background {
  height: 50px;
  background: -moz-linear-gradient(top, #1b222c 0%, #531516 100%);
}
</style>
  