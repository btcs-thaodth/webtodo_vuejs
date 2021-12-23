<template>
  <v-app ref="app">
    <the-sidebar></the-sidebar>
    <the-header></the-header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheSidebar from './components/layouts/TheSidebar.vue';
export default {
  components: { TheHeader, TheSidebar },
};
</script>
