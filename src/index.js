export default {
  functional: true,
  render(h, context) {
    const { data: { attrs }, scopedSlots } = context
    const { default: render } = scopedSlots
    return render(attrs)
  }
}
