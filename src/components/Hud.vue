<template lang="pug">
.hud
  .hud__center(v-show="centerMessage.length > 0") {{ centerMessage }}
  .hud__life
    .hud__lifeIcon
    .hud__lifeCount ×{{ player.status.life }}
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
      player: 'getPlayer'
    })
  },
  watch: {
    'player.status': {
      handler () {
        if (this.player.status.dead) {
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
  position: relative
  width: 100%
  height: 100%
  z-index: 1000
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
  &__life
    position: absolute
    top: 30px
    right: 30px
    height: 20px
    &Icon
      width: 20px
      height: 20px
      background-color: black
      display: inline-block
    &Count
      display: inline-block
      line-height: 20px
      height: 20px
      vertical-align: 2px
      font-size: 18px
      font-weight: bold
</style>
