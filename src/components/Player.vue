<template lang="pug">
.player(:style="playerStyle")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['events'],
  computed: {
    playerStyle () {
      return {
        bottom: this.player.position.current.y + 'px',
        width: this.player.size.width + 'px',
        height: this.player.size.height + 'px'
      }
    },
    ...mapGetters({
      player: 'getPlayer'
    })
  },
  watch: {
    'player.events' () {
      if (this.player.events.indexOf('jump') >= 0) {
        this.jump()
        this.$store.dispatch('clearPlayerEvent')
      }
    }
  },
  created () {
    this.$store.dispatch('setPlayerSize', { width: 30, height: 30 })
  },
  methods: {
    jump () {
      if (this.player.jump.timer > 0) {
        return
      }
      const frameCount = 90
      this.$store.dispatch('setPlayerJump', {
        frameCount,
        timer: setInterval(() => {
          this.$store.dispatch('setPlayerJump', {
            frameCount: this.player.jump.frameCount - 1
          })
          if (this.player.jump.frameCount <= 0) {
            clearInterval(this.player.jump.timer)
            this.$store.dispatch('setPlayerJump', { timer: 0 })
          }
          const yDiff = (this.player.jump.frameCount < frameCount / 2) ? -3 : 3
          this.$store.dispatch('movePlayer', { x: 0, y: yDiff })
        }, 10)
      })
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
