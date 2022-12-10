<template>
  <MobileCard v-if="getIsMobile" />
  <v-card v-else class="pa-5">
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
import ConverterMixin from "~/mixins/ConverterMixin";

export default {
  name: 'IndexPage',
  mixins: [ConverterMixin]

}
</script>
