<template lang="pug">
.starting
  .starting__center
    | {{ this.player.status.life }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      player: 'getPlayer'
    })
  },
  created () {
    this.$store.dispatch('prepareRestart')
    setTimeout(() => {
      this.$store.dispatch('restart')
    }, 3000)
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
</style>
