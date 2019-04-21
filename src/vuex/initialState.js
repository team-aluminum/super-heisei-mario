export default {
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
    jump: {
      timer: 0,
      frameCount: 0,
      descenting: false
    },
    events: []
  },
  things: {
    objects: [],
    backgrounds: []
  }
}
