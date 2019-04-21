export default {
  ADD_OBJECT (state, object) {
    state.objects.push(object)
  },
  MOVE_PLAYER (state, { x, y }) {
    state.player.position.x += x
    state.player.position.y += y
  },
  ADD_PLAYER_EVENT (state, eventName) {
    state.player.events.push(eventName)
  },
  CLEAR_PLAYER_EVENT (state) {
    state.player.events = []
  },
  SET_PLAYER_JUMP (state, jump) {
    state.player.jump = jump
  }
}
