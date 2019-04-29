<template lang="pug">
  #sounds
    audio#sound-jump(:src="require('@/assets/sounds/smb_jump-small.wav')")
    audio#sound-coin(:src="require('@/assets/sounds/smb_coin.wav')")
    audio#sound-dead(:src="require('@/assets/sounds/smb_mariodie.wav')")
    audio#sound-gameover(:src="require('@/assets/sounds/smb_gameover.wav')")
    audio#sound-clear(:src="require('@/assets/sounds/smb_stage_clear.wav')")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      lastJumpEvent: false
    }
  },
  computed: {
    ...mapGetters({
      player: 'getPlayer'
    })
  },
  watch: {
    'player.events': {
      handler () {
        if (this.player.events.indexOf('jump') >= 0) {
          this.playSound('jump')
        }
        if (this.player.events.indexOf('dead') >= 0) {
          this.playSound('dead')
        }
      },
      deep: true
    }
  },
  methods: {
    playSound: function (id) {
      const audio = document.getElementById('sound-' + id)
      audio.currentTime = 0
      audio.play()
    }
  }
}
</script>
