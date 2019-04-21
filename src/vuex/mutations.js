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
    const tmpPositionEdges = {
      leftX: tmpPosition.x - (state.player.size.width / 2),
      rightX: tmpPosition.x + (state.player.size.width / 2),
      bottomY: tmpPosition.y,
      topY: tmpPosition.y + state.player.size.height
    }
    const colliding = { right: false, left: false, bottom: false, top: false }
    const collidingObject = state.things.objects.find(object => {
      const objectPosition = object.data.position
      const objectSize = object.data.size
      colliding.right = (
        objectPosition.x <= tmpPositionEdges.rightX &&
        tmpPositionEdges.rightX <= objectPosition.x + objectSize.width
      )
      colliding.left = (
        objectPosition.x <= tmpPositionEdges.leftX &&
        tmpPositionEdges.leftX <= objectPosition.x + objectSize.width
      )
      colliding.bottom = (
        objectPosition.y <= tmpPositionEdges.bottomY &&
        tmpPositionEdges.bottomY <= objectPosition.y + objectSize.height
      )
      colliding.top = (
        objectPosition.y <= tmpPositionEdges.topY &&
        tmpPositionEdges.topY <= objectPosition.y + objectSize.height
      )
      return (colliding.right || colliding.left) && (colliding.bottom || colliding.top)
    })
    if (collidingObject) {
      const position = { x: tmpPosition.x, y: tmpPosition.y }
      const objectPosition = collidingObject.data.position
      const objectSize = collidingObject.data.size
      if (colliding.right && !colliding.left) {
        position.x = objectPosition.x - (state.player.size.width / 2)
      } else if (!colliding.right && colliding.left) {
        position.x = objectPosition.x + objectSize.width + (state.player.size.width / 2)
      }
      if (colliding.top && !colliding.bottom) {
        position.y = objectPosition.y
      } else if (!colliding.top && colliding.bottom) {
        position.y = objectPosition.y + objectSize.height
      }
      Object.assign(
        state.player.position.current,
        position
      )
    } else {
      Object.assign(
        state.player.position.current,
        tmpPosition
      )
    }
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
