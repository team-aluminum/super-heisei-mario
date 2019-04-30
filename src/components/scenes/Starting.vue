<template lang="pug">
.starting
  .starting__center(v-show="!gameover")
    .starting__icon
    .starting__life ×{{ this.player.status.life }}
  .starting__gameover(v-show="gameover")
    .starting__center GAME OVER
    .starting__bottom PRESS SPACE
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      gameover: false
    }
  },
  computed: {
    ...mapGetters({
      player: 'getPlayer'
    }),
    restartable () {
      return this.player.status.life > 0
    }
  },
  created () {
    if (this.restartable) {
      this.$store.dispatch('prepareRestart')
      setTimeout(() => {
        this.$store.dispatch('restart')
      }, 3000)
    } else {
      this.gameover = true
      document.addEventListener('keydown', e => {
        if (e.key === ' ') {
          this.$router.push('/?reload=true')
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.starting
  width: 100%
  height: 100%
  background-color: black
  position: relative
  &__center
    color: white
    position: absolute
    top: 0
    bottom: 0
    height: 30px
    line-height: 30px
    width: 100%
    margin: auto
    text-align: center
    font-weight: bold
    font-size: 32px
  &__icon
    width: 30px
    height: 30px
    background-image: url('~@/assets/mario/mario-right.png')
    background-size: 30px 30px
    display: inline-block
  &__life
    display: inline-block
  &__bottom
    color: white
    position: absolute
    bottom: 20%
    font-size: 20px
    width: 100%
    text-align: center
</style>
