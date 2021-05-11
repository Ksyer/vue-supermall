<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      // scroll: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        observeDOM: true,
        click: true,
        probeType: 3,
        pullUpLoad: true
      })
    })
  }
}
</script>
