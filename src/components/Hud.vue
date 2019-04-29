<template lang="pug">
.hud(:class="{'-whiteText': scene.current === 'starting'}")
  .hud__center(v-show="centerMessage.length > 0") {{ centerMessage }}
  .hud__top
    .hud__top__play
      .hud__top__playLife
        .hud__top__playLifeIcon
        .hud__top__playCount ×{{ player.status.life }}
      .hud__top__playCoin
        .hud__top__playCoinIcon
        .hud__top__playCount ×0
    .hud__top__world
      .hud__top__worldLabel WORLD
      .hud__top__worldName HEISEI
    .hud__top__time
      .hud__top__timeLabel TIME
      .hud__top__worldName 100

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      centerMessage: ''
    }
  },
  computed: {
    ...mapGetters({
      player: 'getPlayer',
      scene: 'getScene'
    })
  },
  watch: {
    'player.status': {
      handler () {
        if (this.player.status.dead && this.player.status.life > 0) {
          this.centerMessage = 'Press R to Restart'
        } else {
          this.centerMessage = ''
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus">
.hud
  position: absolute
  width: 100%
  height: 100%
  z-index: 1000
  top: 0
  &.-whiteText
    color: white
  &__center
    position: absolute
    top: 0
    bottom: 0
    height: 50px
    line-height: 50px
    width: 100%
    margin: auto
    text-align: center
    font-weight: bold
    font-size: 32px
  &__top
    display: flex
    align-items: center
    position: absolute
    width: 100%
    top: 10px
    left: 0
    &__play
      width: 150px
      margin-left: 20px
      &Count
        display: inline-block
        line-height: 20px
        height: 20px
        vertical-align: 2px
        font-size: 18px
        font-weight: bold
      &Coin
        &Icon
          width: 20px
          height: 20px
          display: inline-block
          background-image: url('~@/assets/mario/mario-right.png')
          background-size: 20px 20px
      &Life
        height: 20px
        &Icon
          width: 20px
          height: 20px
          display: inline-block
          background-image: url('~@/assets/mario/mario-right.png')
          background-size: 20px 20px
    &__world
      width: 100%
      text-align: center
    &__time
      width: 150px
      text-align: right
      margin-right: 20px

</style>
