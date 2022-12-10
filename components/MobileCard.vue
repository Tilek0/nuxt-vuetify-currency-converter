<template>
  <v-card class="pa-5">
    <v-row>
      <v-card-title>{{ $t('currencyConverter') }}</v-card-title>
    </v-row>
    <v-row>
      <v-text-field
        v-model="amount"
        :rules="amountRules"
        :label="$t('amount')"
        type="number"
        outlined
      ></v-text-field>
    </v-row>
    <v-row>
      <v-select
        v-model="currencyFrom"
        :items="getCurrencyKeys"
        :label="$t('from')"
        outlined
      ></v-select>
    </v-row>
    <v-row justify="center" align="center" class="mb-7">
      <v-icon @click.stop="switchCurrency">
        mdi-cached
      </v-icon>
    </v-row>
    <v-row>
      <v-select
        v-model="currencyTo"
        :items="getCurrencyKeys"
        :label="$t('to')"
        outlined
      ></v-select>
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

import ConverterMixin from "~/mixins/ConverterMixin";
export default {
  name: 'MobileCard',
  mixins: [ConverterMixin],
}
</script>
