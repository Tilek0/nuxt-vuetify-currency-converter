import {mapActions, mapGetters} from "vuex";

export default {
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
