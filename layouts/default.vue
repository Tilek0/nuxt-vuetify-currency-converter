<template>
  <v-app>
    <MobileHeader v-if="getIsMobile"/>
    <MyHeader v-else/>
    <v-main class="fullHeight">
      <v-container :class="getIsMobile ? null : 'd-flex justify-center'">
        <keep-alive>
          <Nuxt/>
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import MyHeader from '../components/MyHeader'
import MobileHeader from '../components/MobileHeader'
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'DefaultLayout',
  components: {MyHeader, MobileHeader},
  computed: {
    ...mapGetters(['getIsMobile']),
  },
  methods: {
    ...mapMutations(['setIsMobile']),
  },
  mounted() {
    if(window.innerWidth >= 760) {
      this.setIsMobile(false)
    } else {
      this.setIsMobile(true)
    }
  }
}
</script>
<style scoped>
.fullHeight {
  height: 100vh;
}
</style>

