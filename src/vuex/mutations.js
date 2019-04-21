export default {
  MOVE_PLAYER (state, { x, y }) {
    Object.assign(
      state.player.position.previous,
      state.player.position.current
    )
    const tmpPosition = {
      x: state.player.position.current.x + x,
      y: state.player.position.current.y + y
    }
    // state.objects.forEach(object => {
    //   const collidingHorizontally = object.x < tmpPosition.x && tmpPosition.x
    // })
    Object.assign(
      state.player.position.current,
      tmpPosition
    )
  },
  ADD_PLAYER_EVENT (state, eventName) {
    state.player.events.push(eventName)
  },
  CLEAR_PLAYER_EVENT (state) {
    state.player.events = []
  },
  SET_PLAYER_SIZE (state, size) {
    Object.assign(state.player.size, size)
  },
  SET_PLAYER_JUMP (state, jump) {
    Object.assign(state.player.jump, jump)
  },

  ADD_OBJECT (state, object) {
    state.things.objects.push(object)
  },
  ADD_BACKGROUND (state, background) {
    state.things.backgrounds.push(background)
  }
}
