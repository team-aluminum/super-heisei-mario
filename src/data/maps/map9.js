export default {
  previousMapName: 'map8',
  nextMapName: 'map10',
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
emp emp emp emp emp emp emp blk blk qbc blk emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp fem fem emp emp emp emp emp emp emp emp emp emp emp emp emp fem fem
emp emp emp p02 fem emp emp emp emp emp emp emp emp emp emp emp emp emp p02 fem
f20 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    blk: {
      empty: false,
      componentName: 'Block',
      styles: {
        backgroundImage: `url(${require('@/assets/stage9/block.gif')})`,
        backgroundSize: '30px 30px'
      }
    },
    qbc: {
      empty: false,
      componentName: 'QuestionBlockCoin',
      styles: {
        backgroundImage: `url(${require('@/assets/stage9/question_block.gif')})`,
        backgroundSize: '30px 30px'
      }
    },
    p02: {
      empty: false,
      componentName: 'Pipe',
      horizontalGridCount: 2,
      verticalGridCount: 2,
      styles: {
        backgroundImage: `url(${require('@/assets/stage9/pipe_2.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    p03: {
      empty: false,
      componentName: 'Pipe',
      horizontalGridCount: 2,
      verticalGridCount: 3,
      styles: {
        backgroundImage: `url(${require('@/assets/stage9/pipe_3.png')})`,
        backgroundSize: '30px 30px'
      }
    },
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
      height: 440
    }
  }
}
