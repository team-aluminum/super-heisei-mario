<template lang="pug">
.goaled(v-show="goalScreenView")
  h1(style="color: #fff;") GOAL
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
</style>
