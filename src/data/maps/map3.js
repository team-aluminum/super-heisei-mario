export default {
  previousMapName: 'map2',
  nextMapName: 'map4',
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
f20 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
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
        backgroundImage: `url(${require('@/assets/stage3/pipe_4.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f20: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 20,
      styles: {
        backgroundImage: `url(${require('@/assets/stage3/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  },
  gameHard: {
    'background-image': `url(${require('@/assets/hardwares/1_gbc.png')})`,
    'background-size': '790px',
    'background-position-y': 'calc(50% + 330px)'
  },
  screen: {
    size: {
      width: 400,
      height: 360
    }
  }
}
