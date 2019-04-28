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
f20 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    blk: {
      empty: false,
      componentName: 'Block',
      styles: {
        backgroundColor: 'brown'
      }
    },
    f20: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 20
    }
  }
}
