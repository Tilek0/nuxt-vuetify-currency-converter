<template>
  <v-app>
    <MyHeader />
    <v-main class="fullHeight">
      <v-container class="d-flex justify-center">
        <keep-alive>
          <Nuxt/>
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import MyHeader from '../components/MyHeader'
export default {
  name: 'DefaultLayout',
  components: {MyHeader},
}
</script>
<style scoped>
.fullHeight {
  height: 100vh;
}
</style>

