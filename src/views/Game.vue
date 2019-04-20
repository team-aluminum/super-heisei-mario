<template lang="pug">
.game
  .game__screen
    .game__player(:style="playerStyle")
    .game__objects
      .game__object(v-for="object in objects" :is="object.component" :data="object.data" :player="player")
</template>

<script>
import Mountain from '@/components/Mountain'
export default {
  data () {
    return {
      inputtingKey: '',
      player: {
        position: {
          x: 0,
          y: 0
        },
        jumping: {
          timer: 0,
          frameCount: 0
        }
      },
      objects: []
    }
  },
  components: { Mountain },
  computed: {
    playerStyle () {
      return {
        bottom: this.player.position.y + 'px'
      }
    }
  },
  created () {
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('keyup', this.keyup)
    setInterval(() => {
      this.handleKey()
    }, 5)

    this.objects.push({
      component: 'Mountain',
      data: {
        position: {x: 100, y: 0}
      }
    })
    this.objects.push({
      component: 'Mountain',
      data: {
        position: {x: 500, y: 0}
      }
    })
  },
  methods: {
    keydown (e) {
      if (e.key !== ' ') {
        this.inputtingKey = e.key
      } else {
        this.jumping()
      }
    },
    keyup (e) {
      if (e.key !== ' ') {
        this.inputtingKey = ''
      } else {
      }
    },
    handleKey () {
      switch (this.inputtingKey) {
        case 'ArrowLeft':
          this.player.position.x -= 2
          break
        case 'ArrowRight':
          this.player.position.x += 2
          break
      }
    },
    jumping () {
      if (this.player.jumping.timer > 0) {
        return
      }
      const frameCount = 90
      this.player.jumping.frameCount = frameCount
      this.player.jumping.timer = setInterval(() => {
        if (--this.player.jumping.frameCount <= 0) {
          clearInterval(this.player.jumping.timer)
          this.player.jumping.timer = 0
        }
        this.player.position.y += this.player.jumping.frameCount < frameCount / 2 ? -3 : 3
      }, 10)
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
  &__player
    width: 30px
    height: 30px
    background-color: black
    position: absolute
    z-index: 1
    left: calc(400px - 30px / 2)
    bottom: 0
</style>
