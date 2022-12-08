<template>
  <v-card width="50%" height="70vh" class="overflow-y-auto pa-6 customScroll">
    <v-list-item-subtitle class="text-center">{{ $t('currencyListUpdated') }}: {{
        getUpdatedTime
      }}
    </v-list-item-subtitle>
    <ListItem
      v-for="item in getCurrencyDataList"
      :key="item.name"
      :data="item"
    />
  </v-card>
</template>

<script>
import ListItem from "~/components/ListItem";
import {mapGetters} from "vuex";

export default {
  name: "index",
  data() {
    return {
      icon: null
    }
  },
  components: {ListItem},
  computed: {
    ...mapGetters([
      'getCurrencyDataList',
      'getUpdatedTime'
    ]),
  },
}
</script>

<style lang="scss" scoped>
.customScroll {
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
}
</style>
