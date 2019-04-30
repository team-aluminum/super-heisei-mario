import store from '@/vuex/store'
import constants from '@/constants'

export default async (mapName, offset, objectAdditional) => {
  const mapData = (await import(`@/data/maps/${mapName}`)).default
  const chips = mapData.chips.split('\n')
    .filter(row => row)
    .map(row => row.split(' ').map(col => mapData.chipMeta[col].empty ? null : col))
  const mapHorizontalGridCount = Math.max.apply(null, chips.map(chipsRow => chipsRow.length))
  if (objectAdditional) {
    chips.reverse().forEach((chipsRow, gy) => {
      chipsRow.forEach((chip, gx) => {
        if (chip === null) {
          return
        }
        const chipMeta = mapData.chipMeta[chip]
        if (chipMeta.componentName === 'Block') {
          blockHandler(mapData, chip, offset, gy, gx)
        }
        if (chipMeta.componentName === 'HardBlock') {
          hardBlockHandler(mapData, chip, offset, gy, gx)
        }
        if (chipMeta.componentName === 'QuestionBlock1Up') {
          questionBlockHandler(mapData, chip, offset, gy, gx)
        }
        if (chipMeta.componentName === 'QuestionBlockCoin') {
          questionBlockHandler(mapData, chip, offset, gy, gx)
        }
        if (chipMeta.componentName === 'QuestionBlockKinoko') {
          questionBlockHandler(mapData, chip, offset, gy, gx)
        }
        if (chipMeta.componentName === 'QuestionBlockStar') {
          questionBlockHandler(mapData, chip, offset, gy, gx)
        }
        if (chipMeta.componentName === 'Pipe') {
          pipeHandler(mapData, chip, offset, gy, gx)
        }
        if (chipMeta.componentName === 'Flag') {
          flagHandler(mapData, chip, offset, gy, gx)
        }
        if (chipMeta.componentName === 'Floor') {
          floorHandler(mapData, chip, offset, gy, gx)
        }
      })
    })
  }
  return {
    mapWidth: mapHorizontalGridCount * constants.GRID_LENGTH,
    previousName: mapData.previousMapName,
    nextName: mapData.nextMapName
  }
}

const blockHandler = (mapData, chip, offset, gy, gx) => {
  const chipMeta = mapData.chipMeta[chip]
  store.dispatch('addObject', {
    offset,
    object: {
      component: chipMeta.componentName,
      data: {
        position: { x: gx * constants.GRID_LENGTH, y: gy * constants.GRID_LENGTH },
        size: { width: constants.GRID_LENGTH, height: constants.GRID_LENGTH },
        styles: chipMeta.styles
      }
    }
  })
}
const hardBlockHandler = (mapData, chip, offset, gy, gx) => {
  const chipMeta = mapData.chipMeta[chip]
  store.dispatch('addObject', {
    offset,
    object: {
      component: chipMeta.componentName,
      data: {
        position: { x: gx * constants.GRID_LENGTH, y: gy * constants.GRID_LENGTH },
        size: { width: constants.GRID_LENGTH, height: constants.GRID_LENGTH },
        styles: chipMeta.styles
      }
    }
  })
}
const questionBlockHandler = (mapData, chip, offset, gy, gx) => {
  const chipMeta = mapData.chipMeta[chip]
  store.dispatch('addObject', {
    offset,
    object: {
      component: chipMeta.componentName,
      data: {
        position: { x: gx * constants.GRID_LENGTH, y: gy * constants.GRID_LENGTH },
        size: { width: constants.GRID_LENGTH, height: constants.GRID_LENGTH },
        styles: chipMeta.styles
      }
    }
  })
}
const pipeHandler = (mapData, chip, offset, gy, gx) => {
  const chipMeta = mapData.chipMeta[chip]
  store.dispatch('addObject', {
    offset,
    object: {
      component: chipMeta.componentName,
      data: {
        position: { x: gx * constants.GRID_LENGTH, y: gy * constants.GRID_LENGTH },
        size: { width: constants.GRID_LENGTH * chipMeta.horizontalGridCount, height: constants.GRID_LENGTH * chipMeta.verticalGridCount },
        styles: chipMeta.styles
      }
    }
  })
}
const flagHandler = (mapData, chip, offset, gy, gx) => {
  const chipMeta = mapData.chipMeta[chip]
  store.dispatch('addObject', {
    offset,
    object: {
      component: chipMeta.componentName,
      data: {
        position: { x: gx * constants.GRID_LENGTH, y: gy * constants.GRID_LENGTH },
        size: { width: constants.GRID_LENGTH * chipMeta.verticalGridCount, height: chipMeta.horizontalGridCount * constants.GRID_LENGTH },
        styles: chipMeta.styles
      }
    }
  })
}
const floorHandler = (mapData, chip, offset, gy, gx) => {
  const chipMeta = mapData.chipMeta[chip]
  store.dispatch('addObject', {
    offset,
    object: {
      component: chipMeta.componentName,
      data: {
        position: { x: gx * constants.GRID_LENGTH, y: gy * constants.GRID_LENGTH },
        size: { width: constants.GRID_LENGTH * chipMeta.horizontalGridCount, height: constants.GRID_LENGTH },
        styles: chipMeta.styles
      }
    }
  })
}
