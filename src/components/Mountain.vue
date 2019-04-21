<template lang="pug">
.mountain(:style="selfStyle")
</template>

<script>
export default {
  props: ['data', 'player'],
  computed: {
    selfStyle () {
      return {
        left: `calc(50% + ${(this.data.position.x - this.player.position.current.x)}px)`,
        bottom: this.data.position.y + 'px'
      }
    }
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
