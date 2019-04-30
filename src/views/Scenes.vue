<template lang="pug">
.scenes(:style="{'background-image': currentBackgroundImage}")
  .scenes__screen(:style="screenStyle")
    Starting.starting(v-if="scene.current === 'starting'")
    Game.game(v-show="scene.current === 'game'")
    Hud
    Sound
  GameHard
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    Hud: () => import('@/components/Hud'),
    Game: () => import('@/components/scenes/Game'),
    Starting: () => import('@/components/scenes/Starting'),
    Sound: () => import('@/components/Sound'),
    GameHard: () => import('@/components/GameHard')
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
  },
  created () {
    this.currentBackgroundImage = this.randomBackground()
  },
  data () {
    return {
      backgroundImages: [
        'blue', 'pink', 'red', 'yellow', 'yellow_2'
      ],
      currentBackgroundImage: ''
    }
  },
  methods: {
    randomBackground: function () {
      const random = Math.floor(Math.random() * 5)
      const image = require('@/assets/appBackgrounds/' + this.backgroundImages[random] + '_bg.png')

      return `url(${image})`
    }
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &__screen
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    transition: 0.5s ease
    overflow: hidden
</style>
