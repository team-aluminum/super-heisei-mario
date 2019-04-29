export default {
  previousMapName: 'map1',
  nextMapName: 'map3',
  floor: 'floor1',
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
blk qbk blk qbc blk emp emp emp emp emp emp emp emp emp emp emp emp emp qbl emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp fem fem
emp emp emp emp emp emp emp emp fem fem emp emp emp emp emp emp emp emp fem fem
emp emp emp emp emp emp emp emp p02 fem emp emp emp emp emp emp emp emp p03 fem
f19 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
f19 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
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
        backgroundImage: ``,
        backgroundSize: '30px 30px'
      }
    },
    qbk: {
      empty: false,
      componentName: 'QuestionBlockKinoko',
      styles: {
        backgroundImage: ``,
        backgroundSize: '30px 30px'
      }
    },
    p02: {
      empty: false,
      componentName: 'Pipe',
      horizontalGridCount: 2,
      verticalGridCount: 2,
      styles: {
        backgroundImage: ``,
        backgroundSize: '30px 30px'
      }
    },
    p03: {
      empty: false,
      componentName: 'Pipe',
      horizontalGridCount: 2,
      verticalGridCount: 3,
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
        backgroundImage: `url(${require('@/assets/stage2/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  }
}
