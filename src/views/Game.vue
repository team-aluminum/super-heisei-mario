<template lang="pug">
.game
  .game__screen(:style="screenStyle")
    Player
    .game__things
      .game__background(v-for="(background, i) in backgrounds" :key="'background:' + i"
        :is="background.component" :data="background.data")
      .game__object.-previous(v-for="(object, i) in objects.previousMap"
        :key="'object:previous:' + i" :is="object.component"
        :data="object.data" :offsetX="map.edgesPositions.previous.left")
      .game__object.-current(v-for="(object, i) in objects.currentMap"
        :key="'object:current:' + i" :is="object.component"
        :data="object.data" :offsetX="map.edgesPositions.current.left")
      .game__object.-next(v-for="(object, i) in objects.nextMap"
        :key="'object:next:' + i" :is="object.component"
        :data="object.data" :offsetX="map.edgesPositions.next.left")
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
    Block: () => import('@/components/Block'),
    Floor: () => import('@/components/Floor')
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
  async created () {
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('keyup', this.keyup)
    this.$store.dispatch('setMap', { currentName: 'map1' })
    await mapHandler(this.map.currentName, 'current', true).then(data => {
      this.$store.dispatch('setMap', {
        nextName: data.nextName,
        edgesPositions: Object.assign(
          this.map.edgesPositions,
          { next: { left: data.mapWidth } }
        )
      })
    })
    mapHandler(this.map.nextName, 'next', true)
    this.drawTimer = setInterval(() => { this.draw() }, constants.FRAME_RATE)
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
      this.$store.dispatch('movePlayer', { x: 0, y: -4 })

      if (this.player.position.current.x < this.map.edgesPositions.current.left) {
        this.$store.dispatch('moveToPreviousMap')
      } else if (this.map.edgesPositions.next.left < this.player.position.current.x) {
        this.$store.dispatch('moveToNextMap')
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
