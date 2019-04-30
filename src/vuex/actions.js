export default {
  setScene ({ commit }, scene) {
    commit('SET_SCENE', scene)
  },
  prepareRestart ({ commit }) {
    commit('PREPARE_RESTART')
  },
  restart ({ commit }) {
    commit('RESTART')
  },

  movePlayer ({ commit }, { x, y }) {
    commit('MOVE_PLAYER', { x, y })
  },
  forceMovePlayer ({ commit }, { x, y }) {
    commit('FORCE_MOVE_PLAYER', { x, y })
  },
  setPlayerStatus ({ commit }, status) {
    commit('SET_PLAYER_STATUS', status)
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

  addCreature ({ commit }, creature) {
    commit('ADD_CREATURE', creature)
  },
  moveCreature ({ commit }, { creatureId, x, y }) {
    commit('MOVE_CREATURE', { creatureId, x, y })
  },
  defeatCreature ({ commit }, creatureId) {
    commit('DEFEAT_CREATURE', creatureId)
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
