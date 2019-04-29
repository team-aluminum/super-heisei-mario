<template lang="pug">
  #sounds
    audio#sound-jump(:src="require('@/assets/sounds/smb_jump-small.wav')")
    audio#sound-coin(:src="require('@/assets/sounds/smb_coin.wav')")
    audio#sound-dead(:src="require('@/assets/sounds/smb_mariodie.wav')")
    audio#sound-gameover(:src="require('@/assets/sounds/smb_gameover.wav')")
    audio#sound-clear(:src="require('@/assets/sounds/smb_stage_clear.wav')")
    audio#bgm-smb(:src="require('@/assets/bgm/01_smb.mp3')" loop)
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      currentBgmId: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.playBgm('smb')
    }, 500)
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
          this.stopBgm()
          this.playSound('dead')
        }
        if (this.player.events.indexOf('restart') >= 0) {
          setTimeout(() => {
            this.playBgm('smb')
          }, 500)
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
    },
    playBgm: function (id) {
      this.currentBgmId = 'bgm-' + id
      const audio = document.getElementById(this.currentBgmId)
      audio.currentTime = 0
      audio.play()
    },
    stopBgm: function () {
      const audio = document.getElementById(this.currentBgmId)
      audio.pause()
    }
  }
}
</script>
