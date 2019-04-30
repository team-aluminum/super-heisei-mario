export default {
  getScene (state) {
    return state.scene
  },
  getPlayer (state) {
    return state.player
  },
  getObjects (state) {
    return {
      previousMap: state.things.previousMap.objects,
      currentMap: state.things.currentMap.objects,
      nextMap: state.things.nextMap.objects
    }
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
  getCreatures (state) {
    return state.creatures
  },
  getMap (state) {
    return state.map
  }
}
