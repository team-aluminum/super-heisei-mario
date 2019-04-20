<template lang="pug">
.index
  h1 Super Heisei Mario
  router-link.index__start(to='/playing') Start Playing
</template>

<style lang="stylus" scoped>
.index
  text-align: center
  padding-top: 300px
  h1
    margin-bottom: 30px
  &__start
    display: inline-block
    border: 1px solid
    padding: 10px 20px
    &:hover
      opacity: 0.7
</style>
