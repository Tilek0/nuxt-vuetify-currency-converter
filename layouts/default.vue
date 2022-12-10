<template>
  <v-app>
    <v-app-bar class="d-flex align-center justify-space-around mb-16 pt-2" height="80">
      <v-row align="center">
        <v-col>
          <v-tabs class="d-flex justify-center">
            <v-tab class="px-2">
                <NuxtLink class="text-decoration-none" :to="localePath('/')">{{ $t('home') }}</NuxtLink>
              </v-tab>
              <v-tab class="px-2">
                <NuxtLink class="text-decoration-none" :to="localePath('/List')">{{ $t('list') }}</NuxtLink>
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="currency"
            :items="getCurrencyKeys"
            :label="$t('currency')"
            class="mt-7"
            outlined
            append-outer-icon="mdi-map"
            menu-props="auto"
          >
          </v-select>
        </v-col>
        <v-col>
          <v-tabs class="d-flex justify-center">
            <v-tab>
              <NuxtLink class="text-decoration-none" exact :to="switchLocalePath('en')">{{ $t('en') }}</NuxtLink>
            </v-tab>
            <v-tab>
              <NuxtLink class="text-decoration-none" exact :to="switchLocalePath('ru')">{{ $t('ru') }}</NuxtLink>
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col>
          <v-switch
            v-model="lightMode"
            @change="changeTheme"
            :label="$t('lightMode')"
            hide-details
          >
          </v-switch>
        </v-col>
      </v-row>
    </v-app-bar>
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

import {mapActions, mapGetters} from "vuex";

export default {
  name: 'DefaultLayout',
  data() {
    return {
      lightMode: false,
      currency: 'USD',
    }
  },
  watch: {
    currency() {
      this.getCurrencyData(this.currency)
    }
  },
  computed: {
    ...mapGetters([
      'getCurrencyKeys',
    ]),
    getIcon() {
      return this.currency.toLowerCase().split('').slice(0, 2).join('')
    }

  },
  methods: {
    ...mapActions([
      'getCurrencyData'
    ]),
    changeTheme() {
      this.$vuetify.theme.dark = !this.lightMode;
    },
  },
  mounted() {
    this.getCurrencyData(this.currency)
  }
}
</script>
<style>
.fullHeight {
  height: 100vh;
}
</style>

