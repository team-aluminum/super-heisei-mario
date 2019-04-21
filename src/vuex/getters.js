export default {
  getPlayer (state) {
    return state.player
  },
  getObjects (state) {
    return state.things.objects
  },
  getBackgrounds (state) {
    return state.things.backgrounds
  }
}
