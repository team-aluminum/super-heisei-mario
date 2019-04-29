<template lang="pug">
.scenes
  Game.game(v-if="scene === 'game'")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    Game: () => import('@/views/Game')
  },
  computed: {
    ...mapGetters({
      scene: 'getScene'
    })
  }
}
</script>
