export default {
  addObject ({ commit }, object) {
    commit('ADD_OBJECT', object)
  },
  movePlayer ({ commit }, { x, y }) {
    commit('MOVE_PLAYER', { x, y })
  },
  addPlayerEvent ({ commit }, eventName) {
    commit('ADD_PLAYER_EVENT', eventName)
  },
  clearPlayerEvent ({ commit }) {
    commit('CLEAR_PLAYER_EVENT')
  },
  setPlayerJump ({ commit }, jump) {
    commit('SET_PLAYER_JUMP', jump)
  }
}
