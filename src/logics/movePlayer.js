export default (state, { x, y }) => {
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

  const collidingObject = state.things.currentMap.objects.find(object => {
    const objectPosition = {
      x: object.data.position.x + state.map.edgesPositions.current.left,
      y: object.data.position.y
    }
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
    if (horizontalDistance < horizontalCollisionDistance && verticalDistance < verticalCollisionDistance) {
      currentSidesRelativeToCollidingObject = {
        right: objectEdgesPosition.rightX <= currentEdgesPosition.leftX,
        left: currentEdgesPosition.rightX <= objectEdgesPosition.leftX,
        bottom: currentEdgesPosition.topY <= objectEdgesPosition.bottomY,
        top: objectEdgesPosition.topY <= currentEdgesPosition.bottomY
      }
      return true
    }
    return false
  })
  if (collidingObject) {
    const objectPosition = {
      x: collidingObject.data.position.x + state.map.edgesPositions.current.left,
      y: collidingObject.data.position.y
    }
    const objectSize = collidingObject.data.size
    const objectEdgesPosition = {
      leftX: objectPosition.x,
      rightX: objectPosition.x + objectSize.width,
      bottomY: objectPosition.y,
      topY: objectPosition.y + objectSize.height
    }

    if (currentSidesRelativeToCollidingObject.right) {
      supposedPosition.x = objectEdgesPosition.rightX + (playerSize.width / 2)
    } else if (currentSidesRelativeToCollidingObject.left) {
      supposedPosition.x = objectEdgesPosition.leftX - (playerSize.width / 2)
    }
    if (currentSidesRelativeToCollidingObject.bottom) {
      supposedPosition.y = objectEdgesPosition.bottomY - playerSize.height
      state.player.events.push('stopJump')
    } else if (currentSidesRelativeToCollidingObject.top) {
      supposedPosition.y = objectEdgesPosition.topY
      state.player.events.push('land')
    }
  }

  if (supposedPosition.x < 0) {
    supposedPosition.x = 0
  }
  if (supposedPosition.y < currentPosition.y) {
    state.player.status.floating = true
  }

  Object.assign(state.player.position.previous, currentPosition)
  Object.assign(state.player.position.current, supposedPosition)
}
