<template>
  <v-card class="pa-5">
    <v-row>
      <v-card-title>{{ $t('currencyConverter') }}</v-card-title>
    </v-row>
    <v-row align="center" justify="space-around">
      <v-col cols="2">
        <v-text-field
          v-model="amount"
          :rules="amountRules"
          :label="$t('amount')"
          type="number"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="currencyFrom"
          :items="getCurrencyKeys"
          :label="$t('from')"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="1" class="d-flex justify-center pb-10">
        <v-icon @click.stop="switchCurrency">
          mdi-cached
        </v-icon>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="currencyTo"
          :items="getCurrencyKeys"
          :label="$t('to')"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-text-field
          v-model="converter"
          :label="$t('total')"
          readonly
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: 'IndexPage',
  data() {
    return {
      amount: 1,
      converter: 0,
      currencyFromBefore: 'USD',
      currencyFrom: 'USD',
      currencyTo: 'RUB',
      amountRules: [
        v => !!v || this.$t('amountIsRequired'),
      ],
    }
  },
  watch: {
    amount() {
      this.converterValue()
    },
    async currencyFrom() {
      if (this.currencyFrom === this.currencyTo) this.currencyFrom = ''
      if (this.currencyFrom !== this.currencyFromBefore) {
        await this.getCurrencyData(this.currencyFrom)
        if (this.currencyFrom.length) {
          this.converterValue()
          this.currencyFromBefore = this.currencyFrom
        }
      }
    },
    currencyTo() {
      if (this.currencyTo === this.currencyFrom) this.currencyTo = ''
      if (this.currencyTo.length) this.converterValue()
    }
  },
  computed: {
    ...mapGetters([
      'getCurrencyKeys',
      'getCurrencyDataList',
    ]),
  },
  methods: {
    ...mapActions([
      'getCurrencyData'
    ]),
    converterValue() {
      if (this.getCurrencyDataList.length) {
        const {value} = this.getCurrencyDataList.find(item => item.name === this.currencyTo)
        this.converter = this.amount * value.toFixed(4)
      }
    },
    switchCurrency() {
      const from = this.currencyFrom
      const to = this.currencyTo
      if (from === to) return null
      this.currencyFrom = to
      this.currencyTo = from
    }
  },
  mounted() {
    this.converterValue()
  }
}
</script>
