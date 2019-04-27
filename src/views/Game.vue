<template lang="pug">
.game
  .game__screen(:style="screenStyle")
    Player
    .game__things
      .game__background(v-for="(background, i) in backgrounds" :key="'background:' + i"
        :is="background.component" :data="background.data" :player="player")
      .game__object(v-for="(object, i) in objects" :key="'object:' + i"
        :is="object.component" :data="object.data" :player="player")
</template>

<script>
import { mapGetters } from 'vuex'
import constants from '@/constants'
import mapHandler from '@/logics/mapHandler'
export default {
  data () {
    return {
      inputtingKey: '',
      drawTimer: 0
    }
  },
  components: {
    Player: () => import('@/components/Player'),
    Mountain: () => import('@/components/Mountain'),
    Block: () => import('@/components/Block')
  },
  computed: {
    ...mapGetters({
      player: 'getPlayer',
      objects: 'getObjects',
      backgrounds: 'getBackgrounds',
      screen: 'getScreen',
      map: 'getMap'
    }),
    screenStyle () {
      return {
        width: this.screen.size.width + 'px',
        height: this.screen.size.height + 'px'
      }
    }
  },
  created () {
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('keyup', this.keyup)
    this.drawTimer = setInterval(() => { this.draw() }, constants.FRAME_RATE)
    mapHandler(this.map.current, 'current')
    mapHandler(this.map.next, 'next')
  },
  methods: {
    keydown (e) {
      if (e.key === ' ') {
        this.$store.dispatch('addPlayerEvent', 'jump')
      } else {
        this.inputtingKey = e.key
      }
    },
    keyup (e) {
      if (e.key === ' ') {
        this.$store.dispatch('addPlayerEvent', 'stopJump')
      } else {
        this.inputtingKey = ''
      }
    },
    handleKey () {
      switch (this.inputtingKey) {
        case 'ArrowLeft':
          this.$store.dispatch('movePlayer', { x: -7, y: 0 })
          break
        case 'ArrowRight':
          this.$store.dispatch('movePlayer', { x: +7, y: 0 })
          break
      }
    },
    draw () {
      this.handleKey()
      if (this.player.position.current.y > 0) {
        this.$store.dispatch('movePlayer', { x: 0, y: -4 })
      } else if (!this.player.jump.jumpable) {
        this.$store.dispatch('setPlayerJump', { jumpable: true })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.game
  position: fixed
  height: 100vh
  width: 100vw
  min-width: 800px
  position: relative
  &__screen
    border: 1px solid black
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    overflow: hidden
</style>
