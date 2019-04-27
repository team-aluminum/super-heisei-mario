export default {
  movePlayer ({ commit }, { x, y }) {
    commit('MOVE_PLAYER', { x, y })
  },
  addPlayerEvent ({ commit }, eventName) {
    commit('ADD_PLAYER_EVENT', eventName)
  },
  clearPlayerEvent ({ commit }) {
    commit('CLEAR_PLAYER_EVENT')
  },
  setPlayerSize ({ commit }, size) {
    commit('SET_PLAYER_SIZE', size)
  },
  setPlayerJump ({ commit }, jump) {
    commit('SET_PLAYER_JUMP', jump)
  },

  addObject ({ commit }, object) {
    commit('ADD_OBJECT', object)
  },
  addBackground ({ commit }, background) {
    commit('ADD_BACKGROUND', background)
  },

  setMap ({ commit }, map) {
    commit('SET_MAP', map)
  },
  moveToNextMap ({ commit }) {
    commit('MOVE_TO_NEXT_MAP')
  },
  moveToPreviousMap ({ commit }) {
    commit('MOVE_TO_PREVIOUS_MAP')
  }
}
