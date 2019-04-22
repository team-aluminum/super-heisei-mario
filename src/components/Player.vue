<template lang="pug">
.player.mario.middle(:style="playerStyle" :class="playerStatus")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['events'],
  data: function () {
    return {
      playerStatus: ['walk']
    }
  },
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
      this.playerStatus = ['jump']
      const frameCount = 90
      this.$store.dispatch('setPlayerJump', {
        frameCount,
        timer: setInterval(() => {
          this.$store.dispatch('setPlayerJump', {
            frameCount: this.player.jump.frameCount - 1
          })
          if (this.player.jump.frameCount <= 0) {
            clearInterval(this.player.jump.timer)
            this.playerStatus = ['walk']
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
  position: absolute
  z-index: 1
  /* 後退の場合、水平反転（playerにうまく動的CSSクラス追加して） */
  &.back
    transform: scale(-1, 1)
  &.mario
    background-image: url(/images/charactor/mario-charset.png)
  /* 中サイズなマリオ */
  &.mario.middle
    background-position-y: 80px
  &.mario.middle.walk
    animation: kf-c-walk 0.4s steps(2) infinite
  @keyframes kf-c-walk
    from
      background-position-x: 0
    to
      background-position-x: -80px
      background-position-y: 82px
  &.mario.jump
    background-position-x: 160px
</style>
