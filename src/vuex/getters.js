export default {
  getPlayer (state) {
    return state.player
  },
  getObjects (state) {
    return [].concat(
      state.things.previousMap.objects,
      state.things.currentMap.objects,
      state.things.nextMap.objects
    )
  },
  getBackgrounds (state) {
    return [].concat(
      state.things.previousMap.backgrounds,
      state.things.currentMap.backgrounds,
      state.things.nextMap.backgrounds
    )
  },
  getScreen (state) {
    return state.screen
  },
  getMap (state) {
    return state.map
  }
}
