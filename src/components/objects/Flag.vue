<template lang="pug">
.block(:style="selfStyle")
  img.copaFlag(:src="require('@/assets/flag/copa_flag.gif')")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['data', 'offsetX'],
  data () {
    return {
      copaFlagTop: 25,
      marioFlagTop: 90,
      showingMarioFlagTop: false
    }
  },
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

<style lang="stylus" scoped>
.block
  position: absolute
  background-position: right bottom
  background-repeat: no-repeat
  .copaFlag
    position: absolute
    width: 40px
    height: 30px
    right: 16px
    top: 25px
</style>
