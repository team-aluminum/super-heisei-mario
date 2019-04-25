export default {
  MOVE_PLAYER (state, { x, y }) {
    const currentPosition = Object.assign({}, state.player.position.current)
    const playerSize = Object.assign({}, state.player.size)
    const supposedPosition = { x: currentPosition.x + x, y: currentPosition.y + y }
    const currentEdgesPosition = {
      leftX: currentPosition.x - (playerSize.width / 2),
      rightX: currentPosition.x + (playerSize.width / 2),
      bottomY: currentPosition.y,
      topY: currentPosition.y + playerSize.height
    }
    let currentSidesRelativeToCollidingObject = { right: false, left: false, bottom: false, top: false }

    const collidingObject = state.things.objects.find(object => {
      const objectPosition = object.data.position
      const objectSize = object.data.size
      const objectEdgesPosition = {
        leftX: objectPosition.x,
        rightX: objectPosition.x + objectSize.width,
        bottomY: objectPosition.y,
        topY: objectPosition.y + objectSize.height
      }

      const horizontalDistance = Math.abs(supposedPosition.x - (objectPosition.x + objectSize.width / 2))
      const horizontalCollisionDistance = (playerSize.width + objectSize.width) / 2
      const verticalDistance = Math.abs(
        (supposedPosition.y + playerSize.height / 2) - (objectPosition.y + objectSize.height / 2)
      )
      const verticalCollisionDistance = (playerSize.height + objectSize.height) / 2
      if (horizontalDistance <= horizontalCollisionDistance && verticalDistance <= verticalCollisionDistance) {
        currentSidesRelativeToCollidingObject = {
          right: objectEdgesPosition.rightX < currentEdgesPosition.leftX,
          left: currentEdgesPosition.rightX < objectEdgesPosition.leftX,
          bottom: currentEdgesPosition.topY < objectEdgesPosition.bottomY,
          top: objectEdgesPosition.topY < currentEdgesPosition.bottomY
        }
        return true
      }
      return false
    })
    if (collidingObject) {
      const objectPosition = collidingObject.data.position
      const objectSize = collidingObject.data.size
      const objectEdgesPosition = {
        leftX: objectPosition.x,
        rightX: objectPosition.x + objectSize.width,
        bottomY: objectPosition.y,
        topY: objectPosition.y + objectSize.height
      }

      if (currentSidesRelativeToCollidingObject.right) {
        supposedPosition.x = objectEdgesPosition.rightX + (playerSize.width / 2) + 1
      } else if (currentSidesRelativeToCollidingObject.left) {
        supposedPosition.x = objectEdgesPosition.leftX - (playerSize.width / 2) - 1
      }
      if (currentSidesRelativeToCollidingObject.bottom) {
        supposedPosition.y = objectEdgesPosition.bottomY - 1
      } else if (currentSidesRelativeToCollidingObject.top) {
        supposedPosition.y = objectEdgesPosition.topY + 1
      }
    }

    if (supposedPosition.y < 0) {
      supposedPosition.y = 0
    }

    Object.assign(state.player.position.previous, currentPosition)
    Object.assign(state.player.position.current, supposedPosition)
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
