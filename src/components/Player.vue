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
        height: this.player.size.height + 'px',
        left: `calc(50% - ${this.player.size.width}px / 2)`
      }
    },
    ...mapGetters({
      player: 'getPlayer',
      screen: 'getScreen'
    })
  },
  watch: {
    'player.events' () {
      if (this.player.events.indexOf('jump') >= 0) {
        this.jump()
      }
      if (this.player.events.indexOf('jumpDescent') >= 0) {
        this.stopJump()
      }
      if (this.player.events.length > 0) {
        this.$store.dispatch('clearPlayerEvent')
      }
    }
  },
  created () {
    this.$store.dispatch('setPlayerSize', { width: 30, height: 30 })
  },
  methods: {
    stopJump () {
      clearInterval(this.player.jump.timer)
      this.$store.dispatch('setPlayerJump', { timer: 0 })
    },
    jump () {
      if (this.player.jump.timer > 0) {
        return
      }
      const frameCount = 40
      this.$store.dispatch('setPlayerJump', {
        frameCount,
        timer: setInterval(() => {
          this.$store.dispatch('setPlayerJump', {
            frameCount: this.player.jump.frameCount - 1
          })
          if (this.player.jump.frameCount <= 0) {
            this.stopJump()
          }
          this.$store.dispatch('movePlayer', { x: 0, y: 6 })
        }, 1000 / 60)
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
</style>
