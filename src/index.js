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
    console.log(render($attrs));
    return h(tag, render($attrs))
  }
}
