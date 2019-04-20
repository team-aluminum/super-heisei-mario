<template lang="pug">
.game
  .game__screen
    .game__player(:style="playerStyle")
</template>

<script>
export default {
  data () {
    return {
      player: {
        position: {
          x: 0,
          y: 0
        },
        jumping: {
          timer: 0,
          frameCount: 0
        }
      }
    }
  },
  created () {
    document.addEventListener('keyup', this.keyup)
  },
  computed: {
    playerStyle () {
      return {
        bottom: this.player.position.y + 'px',
        left: this.player.position.x + 'px'
      }
    }
  },
  methods: {
    keyup (e) {
      const key = e.key
      console.log(key)
      switch (key) {
        case 'ArrowLeft':
          this.player.position.x -= 10
          break
        case 'ArrowRight':
          this.player.position.x += 10
          break
        case ' ':
          this.jumping()
          break
      }
    },
    jumping () {
      if (this.player.jumping.timer > 0) {
        return
      }
      this.player.jumping.frameCount = 60
      this.player.jumping.timer = setInterval(() => {
        if (--this.player.jumping.frameCount <= 0) {
          clearInterval(this.player.jumping.timer)
          this.player.jumping.timer = 0
        }
        this.player.position.y += this.player.jumping.frameCount < 30 ? -3 : 3
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
  &__player
    width: 30px
    height: 30px
    background-color: black
    position: absolute
</style>
