<template lang="pug">
.floor(:style="selfStyle")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['data', 'offsetX'],
  computed: {
    selfStyle () {
      const left = this.data.position.x + this.offsetX - this.player.position.current.x
      return Object.assign({
        left: `calc(50% + ${left}px)`,
        bottom: this.data.position.y + 'px',
        width: this.data.size.width + 'px',
        height: this.data.size.height + 'px'
      }, this.data.styles)
    },
    ...mapGetters({
      player: 'getPlayer'
    })
  }
}
</script>

<style lang="stylus">
.floor
  position: absolute
  background-color: green
</style>
