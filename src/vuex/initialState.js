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
        x: 0
      },
      previous: {
        y: 0,
        x: 0
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
    objects: [],
    backgrounds: []
  }
}
