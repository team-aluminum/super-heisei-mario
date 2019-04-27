import store from '@/vuex/store'
import constants from '@/constants'

export default async (mapName, offset, objectAdditional) => {
  const mapData = (await import(`@/data/maps/${mapName}`)).default
  const chips = mapData.chips.split('\n')
    .filter(row => row)
    .map(row => {
      return row.split(' ').map(col => mapData.chipMeta[col].empty ? null : col)
    })
  const mapHorizontalGridCount = Math.max.apply(null, chips.map(chipsRow => chipsRow.length))
  if (objectAdditional) {
    chips.reverse().forEach((chipsRow, gy) => {
      chipsRow.forEach((chip, gx) => {
        if (chip === null) {
          return
        }
        store.dispatch('addObject', {
          offset,
          object: {
            component: mapData.chipMeta[chip].componentName,
            data: {
              position: { x: gx * constants.GRID_LENGTH, y: gy * constants.GRID_LENGTH },
              size: { width: constants.GRID_LENGTH, height: constants.GRID_LENGTH },
              styles: mapData.chipMeta[chip].styles
            }
          }
        })
      })
    })
  }
  return {
    mapWidth: mapHorizontalGridCount * constants.GRID_LENGTH,
    previousName: mapData.previousMapName,
    nextName: mapData.nextMapName
  }
}
