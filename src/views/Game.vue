<template lang="pug">
.game
  .game__screen
    Player(@change="v => player = v")
    .game__things
      .game__object(v-for="(object, i) in objects" :key="i"
        :is="object.component" :data="object.data" :player="player")
      .game__background(v-for="(background, i) in backgrounds"
        :is="background.component" :data="background.data" :player="player")
</template>

<script>
import Player from '@/components/Player'
import Mountain from '@/components/Mountain'
import Block from '@/components/Block'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      inputtingKey: ''
    }
  },
  components: {
    Player,
    Mountain,
    Block
  },
  computed: {
    ...mapGetters({
      player: 'getPlayer',
      objects: 'getObjects',
      backgrounds: 'getBackgrounds'
    })
  },
  created () {
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('keyup', this.keyup)
    setInterval(() => {
      this.handleKey()
    }, 1000 / 60)

    this.$store.dispatch('addBackground', {
      component: 'Mountain',
      data: {
        position: { x: 500, y: 0 }
      }
    })
    this.$store.dispatch('addObject', {
      component: 'Block',
      data: {
        position: { x: 300, y: 0 },
        size: { width: 30, height: 30 }
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
    // overflow: hidden
</style>
