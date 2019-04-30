<template lang="pug">
#game-hard-image(:style="map.gameHard")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      map: 'getMap'
    })
  }
}
</script>

<style lang="stylus">
#game-hard-image
  transition: 0.5s ease;
  width: 100%
  height:100%
  position: fixed
  top: 0
  left: 0
  background-position: center
  background-repeat: no-repeat
</style>
