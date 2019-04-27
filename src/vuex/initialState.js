export default {
  screen: {
    size: {
      width: 800,
      height: 600
    }
  },
  player: {
    position: {
      current: {
        y: 0,
        x: 30
      },
      previous: {
        y: 0,
        x: 30
      }
    },
    size: {
      width: 0,
      height: 0
    },
    jump: {
      timer: 0,
      frameCount: 0,
      jumpable: true
    },
    events: []
  },
  things: {
    previousMap: {
      objects: [],
      backgrounds: []
    },
    currentMap: {
      objects: [],
      backgrounds: []
    },
    nextMap: {
      objects: [],
      backgrounds: []
    }
  },
  map: {
    previous: null,
    current: 'map1',
    next: 'map2',
    leftEdgesPosition: 0
  }
}
