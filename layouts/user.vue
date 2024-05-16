<template>
  <v-app dark>
    <Nuxt />
    <v-bottom-nav
      v-model="activeTab"
      color="primary"
      app
      style="position: fixed; bottom: 40px; width: 100%; z-index: 1000"
    >
      <v-row justify="center" class="gradient-background pa-2">
        <v-btn icon @click="home">
          <v-icon large color="primary">mdi-home</v-icon>
        </v-btn>

        <!-- <v-btn icon @click="navigateTo('search')">
          <v-icon large color="primary">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="navigateTo('favorites')">
          <v-icon large color="primary">mdi-heart</v-icon>
        </v-btn>
        <v-btn icon @click="navigateTo('profile')">
          <v-icon large color="primary">mdi-account</v-icon>
        </v-btn> -->
      </v-row>
    </v-bottom-nav>
  </v-app>
</template>
  
<script>
export default {
  data() {
    return {
      activeTab: null,
    }
  },
  methods:{
    async home() {
      this.$router.push('/backend/home') 
    },
  }
}
</script>

<style scoped>
</style>