<template lang="pug">
.scenes
  .scenes__screen(:style="screenStyle")
    Starting.starting(v-if="scene.current === 'starting'")
    Game.game(v-show="scene.current === 'game'")
    Hud
    Sound
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    Hud: () => import('@/components/Hud'),
    Game: () => import('@/components/scenes/Game'),
    Starting: () => import('@/components/scenes/Starting'),
    Sound: () => import('@/components/Sound')
  },
  computed: {
    screenStyle () {
      return {
        width: this.screen.size.width + 'px',
        height: this.screen.size.height + 'px'
      }
    },
    ...mapGetters({
      scene: 'getScene',
      screen: 'getScreen'
    })
  }
}
</script>

<style lang="stylus">
.scenes
  position: fixed
  height: 100vh
  width: 100vw
  min-width: 800px
  position: relative
  overflow: hidden
  &__screen
    border: 1px solid black
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
</style>
