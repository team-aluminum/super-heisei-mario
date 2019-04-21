<template lang="pug">
.player
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['events'],
  computed: {
    playerStyle () {
      return {
        bottom: this.player.position.y + 'px'
      }
    },
    ...mapGetters({
      player: 'getPlayer'
    })
  },
  watch: {
    'player.events' () {
      console.log('event!')
    }
  },
  methods: {
    jump () {
      if (this.player.jump.timer > 0) {
        return
      }
      const frameCount = 90
      this.$store.dispatch('setPlayerJump', {})
      this.player.jump.frameCount = frameCount
      this.player.jump.timer = setInterval(() => {
        if (--this.player.jump.frameCount <= 0) {
          clearInterval(this.player.jump.timer)
          this.player.jump.timer = 0
        }
        this.player.position.y += (this.player.jump.frameCount < frameCount / 2 || this.player.jump.descenting) ? -3 : 3
      }, 10)
    }
  }
}
</script>

<style lang="stylus" scoped>
.player
  width: 30px
  height: 30px
  background-color: black
  position: absolute
  z-index: 1
  left: calc(400px - 30px / 2)
  bottom: 0
</style>
