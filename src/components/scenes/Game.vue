<template lang="pug">
.game
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
  .game__creatures
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
    Player: () => import('@/components/objects/Player'),
    Mountain: () => import('@/components/objects/Mountain'),
    Block: () => import('@/components/objects/Block'),
    Floor: () => import('@/components/objects/Floor')
  },
  computed: {
    ...mapGetters({
      player: 'getPlayer',
      objects: 'getObjects',
      backgrounds: 'getBackgrounds',
      map: 'getMap'
    }),
    playerAlive () { return this.player.status.alive },
    playerDead () { return this.player.status.dead }
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
      if (e.key === ' ' && this.playerAlive) {
        if (!this.player.status.floating) {
          this.$store.dispatch('addPlayerEvent', 'jump')
        }
      } else {
        this.inputtingKey = e.key
      }
    },
    keyup (e) {
      if (e.key === ' ' && this.playerAlive) {
        this.$store.dispatch('addPlayerEvent', 'stopJump')
      } else {
        this.inputtingKey = ''
        if (this.player.status.moving) {
          this.$store.dispatch('setPlayerStatus', { moving: false })
        }
      }
    },
    handleKey () {
      if (this.playerAlive) {
        switch (this.inputtingKey) {
          case 'ArrowLeft':
            this.$store.dispatch('movePlayer', { x: -7, y: 0 })
            break
          case 'ArrowRight':
            this.$store.dispatch('movePlayer', { x: +7, y: 0 })
            break
          case 'd':
            this.$store.dispatch('addPlayerEvent', 'dead')
            break
        }
      } else if (this.playerDead) {
        if (this.player.status.life > 0) {
          switch (this.inputtingKey) {
            case 'r':
              this.$store.dispatch('setScene', { current: 'starting' })
              break
          }
        } else {
          this.$store.dispatch('setScene', { current: 'starting' })
        }
      }
    },
    draw () {
      this.handleKey()
      if (this.playerAlive) {
        this.$store.dispatch('movePlayer', { x: 0, y: -4 })
      }

      if (this.player.position.current.x < this.map.edgesPositions.current.left) {
        this.$store.dispatch('moveToPreviousMap')
      } else if (this.map.edgesPositions.next.left < this.player.position.current.x) {
        this.$store.dispatch('moveToNextMap')
      }

      if (this.player.position.current.y < -20 && this.playerAlive) {
        this.$store.dispatch('addPlayerEvent', 'dead')
      }
    }
  }
}
</script>

<style lang="stylus">
.game
  width: 100%
  height: 100%
</style>
