<template lang="pug">
.index
  img.index__title_img(src='@/assets/title/images/title.png' @click="$router.push('/playing')")
</template>

<script>
export default {
  created () {
    document.addEventListener('keydown', () => {
      this.$router.push('/playing')
    })
    if (this.$route.query.reload) {
      location.href = '/'
    }
  }
}
</script>

<style lang="stylus" scoped>
.index
  width: 100%
  height: 100vh
  background-color: #fcfcfc
  text-align: center
  padding-top: 10vh
  &__title_img
    height: 80vh
</style>
