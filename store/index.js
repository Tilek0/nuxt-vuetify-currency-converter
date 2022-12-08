export const state = () => ({
  data: [],
  currencyKeys: [],
  currencyDataList: [],
  currencyUpdateTime: '',
})


export const actions = {
  async getCurrencyData({commit}, currency) {
    const response = await this.$axios.$get(`https://v6.exchangerate-api.com/v6/21ea834285e632634186e3dd/latest/${currency}`)
    commit('setData', response)
  }
}

export const mutations = {
  setData(state, response) {
    state.data = response
    state.currencyKeys = Object.keys(response.conversion_rates)
    state.currencyDataList = Object.entries(response.conversion_rates).map(([name, value]) => {
      return {
        name,
        value
      }
    })
    state.currencyUpdateTime = response.time_last_update_utc
  },
}

export const getters = {
  getCurrencyKeys: (state) => {
    return state.currencyKeys
  },
  getCurrencyDataList: (state) => {
    return state.currencyDataList
  },
  getUpdatedTime: (state) => {
    return state.currencyUpdateTime
  },
}
