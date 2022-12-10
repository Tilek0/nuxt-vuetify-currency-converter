import {mapActions, mapGetters} from "vuex";

export default {
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
      'getIsMobile'
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
