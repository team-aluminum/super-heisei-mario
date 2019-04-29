<template lang="pug">
.player(:style="playerStyle")
</template>

<script>
import { mapGetters } from 'vuex'
import constants from '@/constants'
export default {
  computed: {
    playerStyle () {
      let backgroundImage = 'mario-right.png'
      if (this.player.status.direction === 'right') {
        if (this.player.jump.jumpable && this.player.status.moving) {
          backgroundImage = 'mario-right-moving.gif'
        } else if (!this.player.jump.jumpable) {
          backgroundImage = 'mario-right-jumping.png'
        } else {
          backgroundImage = 'mario-right.png'
        }
      }
      if (this.player.status.moving.right && this.player.jump.jumpable) {
        backgroundImage = ''
      } else if (this.player.status.moving.right && this.player.jump.timer > 0) {
        backgroundImage = 'mario-right-jumping.png'
      }
      return {
        bottom: this.player.position.current.y + 'px',
        width: this.player.size.width + 'px',
        height: this.player.size.height + 'px',
        left: `calc(50% - ${this.player.size.width}px / 2)`,
        backgroundImage: `url(${require(`@/assets/mario/${backgroundImage}`)})`
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
      }
      if (this.player.events.indexOf('stopJump') >= 0) {
        this.stopJump()
      }
      if (this.player.events.indexOf('land') >= 0) {
        this.land()
      }
      if (this.player.events.indexOf('dead') >= 0) {
        this.dead()
      }
      if (this.player.events.length > 0) {
        this.$store.dispatch('clearPlayerEvent')
      }
    }
  },
  created () {
    this.$store.dispatch('setPlayerSize', {
      width: constants.GRID_LENGTH, height: constants.GRID_LENGTH
    })
  },
  methods: {
    jump () {
      if (!this.player.jump.jumpable) {
        return
      }
      this.$store.dispatch('setPlayerJump', { jumpable: false })
      if (this.player.jump.timer > 0) {
        return
      }
      const frameCount = 30
      this.$store.dispatch('setPlayerJump', {
        frameCount,
        timer: setInterval(() => {
          this.$store.dispatch('setPlayerJump', {
            frameCount: this.player.jump.frameCount - 1
          })
          if (this.player.jump.frameCount <= 0) {
            this.stopJump()
          }
          this.$store.dispatch('movePlayer', { x: 0, y: 8 })
        }, constants.FRAME_RATE)
      })
    },
    stopJump () {
      clearInterval(this.player.jump.timer)
      this.$store.dispatch('setPlayerJump', { timer: 0 })
    },
    land () {
      this.$store.dispatch('setPlayerJump', { jumpable: true })
    },
    dead () {
      this.$store.dispatch('setPlayerStatus', { alive: false })
      setTimeout(() => {
        let frameCount = 20
        const timer = setInterval(() => {
          if (this.player.position.current.y <= -30) {
            this.$store.dispatch('setPlayerStatus', { dead: true })
            clearInterval(timer)
          }
          this.$store.dispatch('forceMovePlayer', { x: 0, y: 5 * (frameCount-- >= 0 ? 1 : -1) })
        }, constants.FRAME_RATE)
      }, 2000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.player
  width: 30px
  height: 30px
  position: absolute
  z-index: 1
  background-size: 30px 30px
</style>
