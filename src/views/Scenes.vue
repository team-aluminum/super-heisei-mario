<template lang="pug">
.scenes
  Starting.starting(v-if="scene.current === 'starting'")
  Game.game(v-show="scene.current === 'game'")
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
