<template lang="pug">
.block(:style="selfStyle")
</template>

<script>
export default {
  props: ['data', 'player'],
  computed: {
    selfStyle () {
      return {
        left: (this.data.position.x - this.player.position.current.x) + 'px',
        bottom: this.data.position.y + 'px',
        width: this.data.size.width + 'px',
        height: this.data.size.height + 'px'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.block
  width: 50px
  height: 50px
  position: absolute
  border: 1px solid gray
  background-color: brown
</style>
