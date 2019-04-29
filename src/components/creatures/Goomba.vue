<template lang="pug">
.goomba(:style="selfStyle")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['data'],
  computed: {
    selfStyle () {
      const left = this.data.position.x - this.player.position.current.x
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
}
</script>

<style lang="stylus">
.goomba
  position: absolute
  background-color: brown
  left: 10px
  bottom: 30px
</style>
