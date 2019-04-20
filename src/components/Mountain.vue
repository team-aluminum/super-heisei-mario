<template lang="pug">
.mountain(:style="selfStyle")
</template>

<script>
export default {
  props: ['data', 'player'],
  computed: {
    selfStyle () {
      return {
        left: (this.data.position.x - this.player.position.x) + 'px',
        bottom: this.data.position.y + 'px'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.mountain
  position: absolute
  width: 300px
  height: 0
  border-bottom: 180px solid lightgreen
  border-left: 240px solid transparent
  border-right: 240px solid transparent
</style>
