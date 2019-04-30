<template lang="pug">
.background(:style="selfStyle")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['data', 'offsetX'],
  computed: {
    selfStyle () {
      const left = this.data.position.x + this.offsetX - this.player.position.current.x
      return Object.assign({
        left: `calc(50% + ${left}px)`
      }, this.data.styles)
    },
    ...mapGetters({
      player: 'getPlayer'
    })
  }
}
</script>

<style lang="stylus">
.background
  position: absolute
  background-image: url('~@/assets/object/bg.png')
  background-size: cover
  height: 100%
  width: 1000px
  top: 0
  background-size: cover
</style>
