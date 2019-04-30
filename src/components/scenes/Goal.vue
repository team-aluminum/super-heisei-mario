<template lang="pug">
.goaled
  .starting__center(v-show="goaled1")
    h1(style="color: #fff;") GOAL
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      goaled1: true
    }
  },
  computed: {
    ...mapGetters({
      player: 'getPlayer'
    }),
    goaled () {
      return this.player.status.life > 0
    }
  },
  created () {
    if (this.restartable) {
      this.goaled = true
    }
  }
}
</script>

<style lang="stylus">
.goaled
  width: 100%
  height: 100%
  background-color: black
  position: relative
  z-index: 9999
</style>
