export default {
  previousMapName: 'map2',
  nextMapName: 'map4',
  floor: 'floor1',
  chips: `
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp fem fem emp emp emp emp emp emp emp emp emp fem fem emp
emp emp emp emp emp emp fem fem emp emp emp emp emp emp emp emp emp fem fem emp
emp emp emp emp emp emp fem fem emp emp emp emp emp emp emp emp emp fem fem emp
emp emp emp emp emp emp p04 fem emp emp emp emp emp emp emp emp emp p04 fem emp
f19 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
f19 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    p04: {
      empty: false,
      componentName: 'Pipe',
      horizontalGridCount: 2,
      verticalGridCount: 4,
      styles: {
        backgroundImage: ``,
        backgroundSize: '30px 30px'
      }
    },
    f19: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 19,
      styles: {
        backgroundImage: `url(${require('@/assets/stage3/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  }
}
