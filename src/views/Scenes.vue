<template lang="pug">
.scenes
  Game.game(v-if="scene.current === 'game'")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    Game: () => import('@/components/scenes/Game')
  },
  computed: {
    ...mapGetters({
      scene: 'getScene'
    })
  }
}
</script>
