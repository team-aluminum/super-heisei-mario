export default {
  previousMapName: 'map1',
  nextMapName: 'map3',
  floor: 'floor1',
  chips: `
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp blk blk emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp blk blk blk blk blk emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
f16 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem emp emp f02 fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    blk: {
      empty: false,
      componentName: 'Block',
      styles: {
        backgroundImage: `url(${require('@/assets/stage2/block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f16: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 16,
      styles: {
        backgroundImage: `url(${require('@/assets/stage2/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f02: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 2,
      styles: {
        backgroundImage: `url(${require('@/assets/stage2/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  }
}
