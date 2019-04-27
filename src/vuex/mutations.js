import movePlayer from '@/logics/movePlayer'
import { moveToPreviousMap, moveToNextMap } from '@/logics/moveMap'
export default {
  MOVE_PLAYER (state, { x, y }) {
    movePlayer(state, { x, y })
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

  ADD_OBJECT (state, { object, offset = 'current' }) {
    if (offset === 'current') {
      state.things.currentMap.objects.push(object)
    } else if (offset === 'previous') {
      state.things.previousMap.objects.push(object)
    } else if (offset === 'next') {
      state.things.nextMap.objects.push(object)
    }
  },
  ADD_BACKGROUND (state, background, offset = 'current') {
    if (offset === 'current') {
      state.things.currentMap.backgrounds.push(background)
    } else if (offset === 'previous') {
      state.things.previousMap.backgrounds.push(background)
    } else if (offset === 'next') {
      state.things.nextMap.backgrounds.push(background)
    }
  },

  SET_MAP (state, map) {
    Object.assign(state.map, map)
  },
  MOVE_TO_NEXT_MAP (state) {
    moveToNextMap(state)
  },
  MOVE_TO_PREVIOUS_MAP (state) {
    moveToPreviousMap(state)
  }
}
