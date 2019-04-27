import store from '@/vuex/store'
import constants from '@/constants'
export default (mapName, offset) => {
  import(`@/data/maps/${mapName}`).then(_mapData => {
    const mapData = _mapData.default
    const chips = mapData.chips.split('\n')
      .filter(row => row)
      .map(row => {
        return row.split(' ').map(col => {
          return mapData.chipMeta[col].empty ? null : col
        })
      })
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
              size: { width: constants.GRID_LENGTH, height: constants.GRID_LENGTH }
            }
          }
        })
      })
    })
  })
}
