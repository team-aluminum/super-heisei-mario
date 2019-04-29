import movePlayer from '@/logics/movePlayer'
import { moveToPreviousMap, moveToNextMap } from '@/logics/moveMap'
import constants from '@/constants'
export default {
  SET_SCENE (state, scene) {
    Object.assign(state.scene, scene)
  },
  MOVE_PLAYER (state, { x, y }) {
    if (x > 0) {
      state.player.status.moving = true
      state.player.status.direction = 'right'
    } else if (x < 0) {
      state.player.status.moving = true
      state.player.status.direction = 'left'
    }
    movePlayer(state, { x, y })
  },
  PREPARE_RESTART (state) {
    const initialPosition = {
      x: constants.INITIAL_POSITION.x,
      y: constants.INITIAL_POSITION.y
    }
    Object.assign(state.player.position.current, {
      x: initialPosition.x,
      y: initialPosition.y
    })
    Object.assign(state.player.position.previous, {
      x: initialPosition.x,
      y: initialPosition.y
    })
    Object.assign(state.player.status, {
      life: state.player.status.life - 1,
      alive: false,
      dead: false
    })
  },
  RESTART (state) {
    state.player.status.alive = true
    state.player.events.push('restart')
    Object.assign(state.scene, { current: 'game' })
  },
  FORCE_MOVE_PLAYER (state, { x, y }) {
    Object.assign(state.player.position.previous, state.player.position.current)
    Object.assign(state.player.position.current, {
      x: state.player.position.current.x + x,
      y: state.player.position.current.y + y
    })
  },
  SET_PLAYER_STATUS (state, status) {
    Object.assign(state.player.status, status)
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
  ADD_BACKGROUND (state, { background, offset = 'current' }) {
    if (offset === 'current') {
      state.things.currentMap.backgrounds.push(background)
    } else if (offset === 'previous') {
      state.things.previousMap.backgrounds.push(background)
    } else if (offset === 'next') {
      state.things.nextMap.backgrounds.push(background)
    }
  },

  ADD_CREATURE (state, creature) {
    const maxId = Math.max.apply(null, [0].concat(
      state.creatures.map(c => c.id)
    ))
    Object.assign(creature, { id: maxId + 1 })
    state.creatures.push(creature)
  },
  MOVE_CREATURE (state, { creatureId, x, y }) {
    const creatureIndex = state.creatures.findIndex(c => c.id === creatureId)
    const creature = state.creatures.find(c => c.id === creatureId)
    if (creatureIndex < 0) {
      return
    }
    state.creatures.splice(creatureIndex, 1, Object.assign(creature,
      Object.assign(creature.data, {
        position: {
          x: creature.data.position.x + x,
          y: creature.data.position.y + y
        }
      })
    ))
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
