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
        <v-card class="ma-1 custom-card" @click="addAccount">
          <v-card-text style="color: white; text-align: center">
            ບັນຊີ
            <br />
            <img :src="cardSvg" height="80" style="text-align: center" />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card" @click="menuTap('CR')">
          <v-card-text style="color: white; text-align: center">
            ເຕີມເງິນ
            <br />
            <img :src="wallin" height="80" style="text-align: center" />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card" @click="menuTap('DR')">
          <v-card-text style="color: white; text-align: center">
            ຖອນເງິນ
            <br />
            <img
              :src="wallou"
              height="80"
              style="text-align: center"
              @click="menuTap('DR')"
            />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card" @click="statement">
          <v-card-text style="color: white; text-align: center">
            ການເຄື່ອນໄຫວບັນຊີ
            <br />
            <img :src="stmtSvg" height="80" style="text-align: center" />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card" @click="resetpassword">
          <v-card-text style="color: white; text-align: center">
            ລະຫັດຜ່ານ
            <br />
            <img :src="passwordSvg" height="80" style="text-align: center" />
          </v-card-text>
        </v-card>
        <v-card class="ma-1 custom-card">
          <v-card-text style="color: white; text-align: center">
            ເຂົ້າຫລິ້ນເກມ
            <br />
            <img :src="playSvg" height="80" style="text-align: center" />
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
  name:'home',
  data() {
    return {
      playSvg: require('~/assets/icons/usergradient/play.svg'),
      stmtSvg: require('~/assets/icons/usergradient/statement.svg'),
      wallin: require('~/assets/icons/usergradient/walletin.svg'),
      wallou: require('~/assets/icons/usergradient/walletout.svg'),
      cardSvg: require('~/assets/icons/usergradient/card.svg'),
      passwordSvg: require('~/assets/icons/usergradient/password.svg'),
      activeTab: null,
      isLoading: false,
      topupForm: false,
      txnKey: 1,
      txnType: 'CR',
    }
  },
  async created() {},
  async mounted() {},
  computed: {},
  methods: {
    postTransaction() {},
    async statement() {
      this.$router.push('/member/statement') 
    },
    async resetpassword() {
      this.$router.push('/member/password') 
    },
    async addAccount() {
      this.$router.push('/member/account') 
    },
    navigateTo(routeName) {
      this.$router.push({ name: routeName })
    },
    menuTap(menu) {
      // if (menu == 'CR') {
      this.txnType = menu
      this.txnKey += 1
      this.topupForm = true
      // }
      console.log(`TEST TAP`)
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
  