<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  methods: {
    scrollTo(x = 0, y = 0, delayTime = 1000) {
      this.scroll.scrollTo(x, y, delayTime)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        observeDOM: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      /**
       * 监听滚动位置
       */
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })

      /**
       * 监听上拉加载
       */
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    })
  }
}
</script>
