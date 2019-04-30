export default {
  previousMapName: 'map6',
  nextMapName: 'map8',
  chips: `
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp blk blk blk emp emp emp emp blk qbc qbc blk emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp blk blk emp emp emp emp emp hdb emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp hb2 fem emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp hb3 fem fem fem emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp hb4 emp fem fem fem emp emp
f20 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    blk: {
      empty: false,
      componentName: 'Block',
      styles: {
        backgroundImage: `url(${require('@/assets/stage7/block.gif')})`,
        backgroundSize: '30px 30px'
      }
    },
    qbc: {
      empty: false,
      componentName: 'QuestionBlockCoin',
      styles: {
        backgroundImage: `url(${require('@/assets/stage7/question_block.gif')})`,
        backgroundSize: '30px 30px'
      }
    },
    hdb: {
      empty: false,
      componentName: 'HardBlock',
      styles: {
        backgroundImage: `url(${require('@/assets/stage7/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb2: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 2,
      styles: {
        backgroundImage: `url(${require('@/assets/stage7/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb3: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 3,
      styles: {
        backgroundImage: `url(${require('@/assets/stage7/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb4: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 4,
      styles: {
        backgroundImage: `url(${require('@/assets/stage7/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f20: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 20,
      styles: {
        backgroundImage: `url(${require('@/assets/stage7/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  },
  gameHard: {
    'background-image': 'url(' + require('@/assets/hardwares/7_wii_hands.png') + '), url(' + require('@/assets/hardwares/7_wii.png') + ')',
    'background-size': '1500px, 1182px',
    'background-position': 'calc(50% + 10px) bottom, calc(50%) calc(50% + 31px)'
  },
  screen: {
    size: {
      width: 800,
      height: 442
    }
  }
}
