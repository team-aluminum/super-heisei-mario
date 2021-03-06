export default {
  scene: {
    current: 'game'
  },
  screen: {
    size: {
      width: 400,
      height: 360
    }
  },
  player: {
    status: {
      life: 5,
      alive: true,
      dead: false,
      moving: false,
      floating: false,
      direction: 'right',
      goal: false
    },
    position: {
      current: {
        y: 30,
        x: 200
      },
      previous: {
        y: 30,
        x: 200
      }
    },
    size: {
      width: 0,
      height: 0
    },
    jump: {
      timer: 0,
      frameCount: 0
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
  creatures: [],
  map: {
    previousName: null,
    currentName: null,
    nextName: null,
    edgesPositions: {
      previous: { left: 0 },
      current: { left: 0 },
      next: { left: 0 }
    },
    gameHard: null
  },
  sound: {
    events: []
  }
}
