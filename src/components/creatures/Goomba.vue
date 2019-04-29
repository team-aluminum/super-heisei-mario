<template lang="pug">
.goomba(:style="selfStyle")
</template>

<script>
import { mapGetters } from 'vuex'
import constants from '@/constants'
export default {
  props: ['data'],
  computed: {
    selfStyle () {
      const left = this.data.position.x - this.player.position.current.x - this.position.x
      return Object.assign({
        width: this.data.size.width + 'px',
        height: this.data.size.height + 'px',
        left: `calc(50% + ${left}px)`,
        bottom: this.data.position.y
      }, this.data.styles)
    },
    ...mapGetters({
      player: 'getPlayer'
    })
  },
  data () {
    return {
      position: {
        x: 0,
        y: 0
      },
      timer: 0
    }
  },
  beforeDestroy () {
    console.log('defeated!!!')
    clearInterval(this.timer)
  },
  created () {
    this.timer = setInterval(() => {
      this.position.x += 0.2
    }, constants.FRAME_RATE / 2)
  }
}
</script>

<style lang="stylus">
.goomba
  position: absolute
  background-color: brown
  left: 10px
  bottom: 30px
</style>
