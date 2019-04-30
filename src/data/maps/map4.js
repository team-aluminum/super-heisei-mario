export default {
  previousMapName: 'map3',
  nextMapName: 'map5',
  chips: `
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp qb1 emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp blk qbk blk
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
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
        backgroundImage: `url(${require('@/assets/stage4/block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    qb1: {
      empty: false,
      componentName: 'QuestionBlock1Up',
      styles: {
        backgroundImage: `url(${require('@/assets/stage4/question_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    qbk: {
      empty: false,
      componentName: 'QuestionBlockKinoko',
      styles: {
        backgroundImage: `url(${require('@/assets/stage4/question_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f20: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 20,
      styles: {
        backgroundImage: `url(${require('@/assets/stage4/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  },
  gameHard: {
    'background-image': `url(${require('@/assets/hardwares/2_gba.png')})`,
    'background-size': '1360px',
    'background-position': 'calc(50% + 6px) calc(50% + 28px)'
  },
  screen: {
    size: {
      width: 540,
      height: 360
    }
  }
}
