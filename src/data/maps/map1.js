export default {
  previousMapName: null,
  nextMapName: 'map2',
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
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp qbc emp
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
        backgroundImage: `url(${require('@/assets/stage1/block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    qbc: {
      empty: false,
      componentName: 'QuestionBlockCoin',
      styles: {
        backgroundImage: `url(${require('@/assets/stage1/question_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f20: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 20,
      styles: {
        backgroundImage: `url(${require('@/assets/stage1/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    flg: {
      empty: false,
      componentName: 'Flag',
      horizontalGridCount: 8,
      verticalGridCount: 1,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/falg.png')})`,
        backgroundSize: 'contain'
      }
    }
  },
  gameHard: {
    'background-image': `url(${require('@/assets/hardwares/0_gb.png')})`,
    'background-size': '815px',
    'background-position-y': 'calc(50% + 290px)'
  },
  screen: {
    size: {
      width: 400,
      height: 362
    }
  }
}
