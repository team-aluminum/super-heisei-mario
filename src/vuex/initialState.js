export default {
  scene: {
    current: 'game'
  },
  screen: {
    size: {
      width: 800,
      height: 600
    }
  },
  player: {
    status: {
      alive: true,
      dead: false
    },
    position: {
      current: {
        y: 30,
        x: 30
      },
      previous: {
        y: 30,
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
    previousName: null,
    currentName: null,
    nextName: null,
    edgesPositions: {
      previous: { left: 0 },
      current: { left: 0 },
      next: { left: 0 }
    }
  }
}
