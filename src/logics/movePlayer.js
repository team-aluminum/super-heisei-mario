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
  const currentSidesRelativeToCollidingObjectArray = []
  const targetObjects = [].concat(
    state.things.currentMap.objects,
    state.creatures
  )

  const collidingObjects = targetObjects.filter(object => {
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
      const sides = {
        right: objectEdgesPosition.rightX <= currentEdgesPosition.leftX,
        left: currentEdgesPosition.rightX <= objectEdgesPosition.leftX,
        bottom: currentEdgesPosition.topY <= objectEdgesPosition.bottomY,
        top: objectEdgesPosition.topY <= currentEdgesPosition.bottomY
      }
      if (!sides.right && !sides.left && !sides.bottom && !sides.top) {
        const horizontalCollisionLenght = ((playerSize.width + objectSize.width) / 2) - horizontalDistance
        const verticalCollidingLength = ((playerSize.height + objectSize.height) / 2) - verticalDistance
        if (horizontalCollisionLenght <= verticalCollidingLength) {
          if (currentPosition.x <= objectPosition.x) {
            sides.left = true
          } else {
            sides.right = true
          }
        } else {
          if (currentPosition.y <= objectPosition.y) {
            sides.bottom = true
          } else {
            sides.top = true
          }
        }
      }
      currentSidesRelativeToCollidingObjectArray.push(sides)
      return true
    }
    return false
  })
  if (collidingObjects.length > 0) {
    collidingObjects.forEach((collidingObject, i) => {
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

      const currentSidesRelativeToCollidingObject = currentSidesRelativeToCollidingObjectArray[i]
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

      if (collidingObject.data.type === 'creature') {
        if (currentSidesRelativeToCollidingObject.top) {
          const creatureId = collidingObject.id
          const creatureIndex = state.creatures.findIndex(c => c.id === creatureId)
          const creature = state.creatures.find(c => c.id === creatureId)
          if (creatureIndex < 0) {
            return
          }
          state.creatures.splice(creatureIndex, 1, Object.assign(creature,
            Object.assign(creature.data, {
              dead: true
            })
          ))
        } else {
          state.player.events.push('dead')
        }
      }
    })
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
