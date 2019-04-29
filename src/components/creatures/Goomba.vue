<template lang="pug">
.goomba(:style="selfStyle")
</template>

<script>
import { mapGetters } from 'vuex'
import constants from '@/constants'
export default {
  props: ['data', 'creatureId'],
  computed: {
    selfStyle () {
      const left = this.data.position.x - this.player.position.current.x
      return Object.assign({
        width: this.data.size.width + 'px',
        height: this.data.size.height + 'px',
        left: `calc(50% + ${left}px)`,
        bottom: this.data.position.y + 'px'
      }, this.data.styles)
    },
    ...mapGetters({
      player: 'getPlayer'
    })
  },
  data () {
    return {
      timer: 0
    }
  },
  beforeDestroy () {
    console.log('defeated!!!')
    clearInterval(this.timer)
  },
  created () {
    this.timer = setInterval(() => {
      this.$store.dispatch('moveCreature', {
        creatureId: this.creatureId,
        x: -0.2,
        y: 0
      })
    }, constants.FRAME_RATE / 2)
  }
}
</script>

<style lang="stylus">
.goomba
  position: absolute
  background-color: brown
</style>
