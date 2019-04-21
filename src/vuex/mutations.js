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
      leftX: tmpPosition.x,
      rightX: tmpPosition.x + state.player.size.width,
      bottomY: tmpPosition.y,
      topY: tmpPosition.y + state.player.size.height
    }
    let colliding = false
    state.things.objects.forEach(object => {
      const objectPosition = object.data.position
      const objectSize = object.data.size
      const collidingRight = (
        objectPosition.x <= tmpPositionEdges.rightX &&
        tmpPositionEdges.rightX <= objectPosition.x + objectSize.width
      )
      const collidingLeft = (
        objectPosition.x <= tmpPositionEdges.leftX &&
        tmpPositionEdges.leftX <= objectPosition.x + objectSize.width
      )
      const collidingBottom = (
        objectPosition.y <= tmpPositionEdges.bottomY &&
        tmpPositionEdges.bottomY <= objectPosition.y + objectSize.height
      )
      const collidingTop = (
        objectPosition.y <= tmpPositionEdges.topY &&
        tmpPositionEdges.topY <= objectPosition.y + objectSize.height
      )
      if ((collidingRight || collidingLeft) && (collidingBottom || collidingTop)) {
        colliding = true
      }
    })
    if (!colliding) {
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
