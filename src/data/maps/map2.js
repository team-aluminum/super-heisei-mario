export default {
  previousMapName: 'map1',
  nextMapName: 'map3',
  chips: `
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp qbc emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
blk qbk blk qbc blk emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp fem fem
emp emp emp emp emp emp emp emp fem fem emp emp emp emp emp emp emp emp fem fem
emp emp emp emp emp emp emp emp p02 fem emp emp emp emp emp emp emp emp p03 fem
f20 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
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
    qbc: {
      empty: false,
      componentName: 'QuestionBlockCoin',
      styles: {
        backgroundImage: `url(${require('@/assets/stage2/question_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    qbk: {
      empty: false,
      componentName: 'QuestionBlockKinoko',
      styles: {
        backgroundImage: `url(${require('@/assets/stage2/question_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    p02: {
      empty: false,
      componentName: 'Pipe',
      horizontalGridCount: 2,
      verticalGridCount: 2,
      styles: {
        backgroundImage: `url(${require('@/assets/stage2/pipe_2.png')})`,
        backgroundSize: '100% auto'
      }
    },
    p03: {
      empty: false,
      componentName: 'Pipe',
      horizontalGridCount: 2,
      verticalGridCount: 3,
      styles: {
        backgroundImage: `url(${require('@/assets/stage2/pipe_3.png')})`,
        backgroundSize: '100% auto'
      }
    },
    f20: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 20,
      styles: {
        backgroundImage: `url(${require('@/assets/stage2/floor.png')})`,
        backgroundSize: '30px 30px'
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
