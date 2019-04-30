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
    return {
      component: 'background',
      data: {
        position: { x: 0, y: 0 },
        size: { width: 100, hright: 1000 }
      }
    }
  },
  getScreen (state) {
    return state.screen
  },
  getMap (state) {
    return state.map
  }
}
