export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h) {
    const { $attrs, $scopedSlots, tag } = this
    const { default: render } = $scopedSlots
    return h(tag, render($attrs))
  }
}
