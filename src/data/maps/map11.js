export default {
  previousMapName: 'map10',
  nextMapName: null,
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
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp fem fem emp emp emp emp emp emp emp emp emp emp emp emp emp fem fem
emp emp emp emp fem emp emp emp emp emp emp emp emp emp emp emp emp emp emp fem
f20 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    f20: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 20,
      styles: {
        backgroundImage: `url(${require('@/assets/stage9/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  },
  gameHard: {
    'background-image': `url(${require('@/assets/hardwares/8_switch_body.png')})`,
    'background-size': '1385px',
    'background-position': 'calc(50%) calc(50% - 2px)'
  },
  screen: {
    size: {
      width: 786,
      height: 442
    }
  }
}
