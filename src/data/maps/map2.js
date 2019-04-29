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
        backgroundColor: 'red'
      }
    },
    f16: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 16,
      styles: {
        backgroundSize: '20px 20px'
      }
    },
    f02: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 5,
      styles: {
        backgroundSize: '20px 20px'
      }
    }
  }
}
