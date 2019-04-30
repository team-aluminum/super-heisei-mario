import mapHandler from '@/logics/mapHandler'
export const moveToPreviousMap = async (state) => {
  await mapHandler(state.map.previousName, null, false).then(data => {
    Object.assign(state.map, {
      previousName: data.previousName,
      currentName: state.map.previousName,
      nextName: state.map.currentName,
      edgesPositions: Object.assign(state.map.edgesPositions, {
        current: { left: state.map.edgesPositions.previous.left },
        next: { left: state.map.edgesPositions.current.left }
      }),
      gameHard: data.gameHard
    })
    Object.assign(state.screen, data.screen)
  })
  Object.assign(state.things, {
    previousMap: { objects: [], backgrounds: [] },
    currentMap: state.things.previousMap,
    nextMap: state.things.currentMap
  })
  if (state.map.previousName !== null) {
    mapHandler(state.map.previousName, 'previous', true).then(data => {
      Object.assign(state.map.edgesPositions, {
        previous: { left: state.map.edgesPositions.current.left - data.mapWidth }
      })
    })
  }
}
export const moveToNextMap = async (state) => {
  await mapHandler(state.map.nextName, null, false).then(data => {
    Object.assign(state.map, {
      previousName: state.map.currentName,
      currentName: state.map.nextName,
      nextName: data.nextName,
      edgesPositions: {
        previous: { left: state.map.edgesPositions.current.left },
        current: { left: state.map.edgesPositions.next.left },
        next: { left: state.map.edgesPositions.next.left + data.mapWidth }
      },
      gameHard: data.gameHard
    })
    Object.assign(state.screen, data.screen)
  })
  Object.assign(state.things, {
    previousMap: state.things.currentMap,
    currentMap: state.things.nextMap,
    nextMap: { objects: [], backgrounds: [] }
  })
  if (state.map.nextName !== null) {
    mapHandler(state.map.nextName, 'next', true)
  }
}
