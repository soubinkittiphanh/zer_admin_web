<template>
    <v-app light>
      <v-main class="black-gradient">
        <!-- Using v-container to center and align the content -->
        <v-container>
          <!-- Nuxt child routes will be injected here -->
          <Nuxt />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <style scoped>
  .black-gradient {
    /* Example of a black to dark gray gradient */
    /* background-image: linear-gradient(to bottom right, #000000, #333333); */
    background: -moz-linear-gradient(top, #1b222c 0%, #531516 100%);
    /* Full viewport height */
    height: 100vh;
  }
  
  /* Ensures all text and content within this component uses the 'Noto Sans Lao' font */
  * {
    font-family: 'Noto Sans Lao', sans-serif;
  }
  </style>
  