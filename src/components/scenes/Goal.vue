<template lang="pug">
.goaled(v-show="goalScreenView")
  h1(style="color: #fff;")
    span NEXT WORLD IS
    br
    span.-reiwa REIWA
</template>

<script>
export default {
  data () {
    return {
      goalScreenView: false
    }
  },
  created () {
    setTimeout(() => {
      this.goalScreenView = true
    }, 6200)
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
  h1
    position: absolute
    margin: auto
    height: 100px
    width: 100%
    top: 0
    bottom: 0
    text-align: center
    span.-reiwa
      font-size: 40px
</style>
