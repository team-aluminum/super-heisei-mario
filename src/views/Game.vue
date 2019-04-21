<template lang="pug">
.game
  .game__screen
    Player(@change="v => player = v")
    .game__objects
      .game__object(v-for="(object, i) in objects" :is="object.component" :data="object.data" :player="player" :key="i")
</template>

<script>
import Player from '@/components/Player'
import Mountain from '@/components/Mountain'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      inputtingKey: ''
    }
  },
  components: { Player, Mountain },
  computed: {
    ...mapGetters({
      objects: 'getObjects',
      player: 'getPlayer'
    })
  },
  created () {
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('keyup', this.keyup)
    setInterval(() => {
      this.handleKey()
    }, 1000 / 60)

    this.$store.dispatch('addObject', {
      component: 'Mountain',
      data: {
        position: { x: 100, y: 0 }
      }
    })
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
        this.$store.dispatch('addPlayerEvent', 'jumpDescent')
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
    width: 800px
    height: 600px
    border: 1px solid black
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    overflow: hidden
</style>
