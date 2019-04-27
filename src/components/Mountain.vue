<template lang="pug">
.mountain(:style="selfStyle")
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
        bottom: this.data.position.y + 'px'
      }, this.data.styles)
    },
    ...mapGetters({
      player: 'getPlayer'
    })
  }
}
</script>

<style lang="stylus" scoped>
.mountain
  position: absolute
  width: 200px
  height: 0
  border-bottom: 180px solid lightgreen
  border-left: 100px solid transparent
  border-right: 100px solid transparent
</style>
