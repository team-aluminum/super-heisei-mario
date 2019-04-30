<template lang="pug">
.block(:style="selfStyle")
  img.kuppaFlag(:src="require('@/assets/flag/kuppa_flag_2.gif')" :style="kuppaStyle" v-show="showingKuppaFlag")
  img.marioFlag(:src="require('@/assets/flag/mario_flag_2.gif')" :style="marioStyle" v-show="showingMarioFlag")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['data', 'offsetX'],
  data () {
    return {
      kuppaFlagTop: 25,
      marioFlagTop: 190,
      showingMarioFlag: false,
      showingKuppaFlag: true,
      goaling: false,
      timer: 0
    }
  },
  computed: {
    selfStyle () {
      const left = this.data.position.x + this.offsetX - this.player.position.current.x
      return Object.assign({
        left: `calc(50% + ${left}px)`,
        bottom: this.data.position.y + 'px',
        width: this.data.size.width + 'px',
        height: this.data.size.height + 'px'
      }, this.data.styles)
    },
    kuppaStyle () {
      return {
        top: this.kuppaFlagTop + 'px'
      }
    },
    marioStyle () {
      return {
        top: this.marioFlagTop + 'px'
      }
    },
    ...mapGetters({
      player: 'getPlayer'
    })
  },
  watch: {
    'player.status': {
      handler () {
        if (this.player.status.goal && !this.goaling) {
          this.goaling = true
          this.showingMarioFlag = true
          const height = this.player.position.current.y
          this.timer = setInterval(() => {
            this.kuppaFlagTop += 3
            if (this.marioFlagTop >= 220 - height) {
              this.marioFlagTop -= 3
            }
            if (this.kuppaFlagTop >= 190) {
              this.showingKuppaFlag = false
              clearInterval(this.timer)
              setInterval(() => {
                this.$store.dispatch('addPlayerEvent', 'finish')
              }, 2000)
            }
          }, 20)
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.block
  position: absolute
  background-position: right bottom
  background-repeat: no-repeat
  .kuppaFlag
    position: absolute
    width: 40px
    height: 30px
    right: 16px
  .marioFlag
    position: absolute
    width: 40px
    height: 30px
    right: 16px
</style>
