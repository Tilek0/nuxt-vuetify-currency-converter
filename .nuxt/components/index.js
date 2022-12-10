export const ListItem = () => import('../..\\components\\ListItem.vue' /* webpackChunkName: "components/list-item" */).then(c => wrapFunctional(c.default || c))
export const MobileCard = () => import('../..\\components\\MobileCard.vue' /* webpackChunkName: "components/mobile-card" */).then(c => wrapFunctional(c.default || c))
export const MobileHeader = () => import('../..\\components\\MobileHeader.vue' /* webpackChunkName: "components/mobile-header" */).then(c => wrapFunctional(c.default || c))
export const MyHeader = () => import('../..\\components\\MyHeader.vue' /* webpackChunkName: "components/my-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
