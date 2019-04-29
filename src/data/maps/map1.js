export default {
  previousMapName: null,
  nextMapName: 'map2',
  floor: 'floor1',
  chips: `
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp blk blk emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp blk blk blk blk blk emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
f05 fem fem fem fem emp emp f13 fem fem fem fem fem fem fem fem fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    blk: {
      empty: false,
      componentName: 'Block',
      styles: {
        backgroundImage: `url(${require('@/assets/stage1/block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f13: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 13,
      styles: {
        backgroundImage: `url(${require('@/assets/stage1/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f05: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 5,
      styles: {
        backgroundImage: `url(${require('@/assets/stage1/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  }
}
