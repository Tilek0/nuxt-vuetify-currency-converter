<template>
  <v-list>
    <v-list-item>
      <v-list-item-avatar>
        <country-flag :country='getIcon' size='normal'/>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ data.value }}</v-list-item-title>
        <v-list-item-subtitle>{{ data.name }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </v-list>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  name: "ListItem",
  components: {CountryFlag},
  props: {
    data: {
      type: Object,
      default: {}
    },
  },
  computed: {
    getIcon() {
      return this.data.name.toLowerCase().split('').slice(0, 2).join('')
    }
  },
}
</script>
<style>
</style>
