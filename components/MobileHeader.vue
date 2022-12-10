<template>
  <v-app-bar height="270">
    <v-col class="d-flex flex-column align-center">
      <v-row>
        <v-tabs class="d-flex justify-center">
          <v-tab>
            <NuxtLink class="text-decoration-none" :to="localePath('/')">{{ $t('home') }}</NuxtLink>
          </v-tab>
          <v-tab>
            <NuxtLink class="text-decoration-none" :to="localePath('/List')">{{ $t('list') }}</NuxtLink>
          </v-tab>
        </v-tabs>
      </v-row>
      <v-col cols="8">
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
      <v-row>
        <v-tabs class="d-flex justify-center">
          <v-tab>
            <NuxtLink class="text-decoration-none" exact :to="switchLocalePath('en')">{{ $t('en') }}</NuxtLink>
          </v-tab>
          <v-tab>
            <NuxtLink class="text-decoration-none" exact :to="switchLocalePath('ru')">{{ $t('ru') }}</NuxtLink>
          </v-tab>
        </v-tabs>
      </v-row>
      <v-row class="mt-8">
        <v-switch
          v-model="lightMode"
          @change="changeTheme"
          :label="$t('lightMode')"
          hide-details
        >
        </v-switch>
      </v-row>
    </v-col>
  </v-app-bar>
</template>

<script>
import HeaderMixin from "~/mixins/HeaderMixin";

export default {
  name: "MobileHeader",
  mixins: [HeaderMixin],
}
</script>
