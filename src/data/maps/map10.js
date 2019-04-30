export default {
  previousMapName: 'map9',
  nextMapName: null,
  chips: `
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp fem emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp fem emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp fem emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp fem emp
emp emp emp emp emp emp emp hb2 fem emp emp emp emp emp emp emp emp emp fem emp
emp emp emp emp emp emp hb3 fem fem emp emp emp emp emp emp emp emp emp fem emp
emp emp emp emp emp hb4 fem fem fem emp emp emp emp emp emp emp emp emp fem emp
emp emp emp emp hb5 fem fem fem fem emp emp emp emp emp emp emp emp emp fem emp
emp emp emp hb6 fem fem fem fem fem emp emp emp emp emp emp emp emp emp fem emp
emp emp hb7 fem fem fem fem fem fem emp emp emp emp emp emp emp emp emp fem emp
emp hb8 fem fem fem fem fem fem fem emp emp emp emp emp emp emp emp emp fem emp
hb9 fem fem fem fem fem fem fem fem emp emp emp emp emp emp emp emp emp flg emp
f20 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    hdb: {
      empty: false,
      componentName: 'HardBlock',
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb2: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 2,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb3: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 3,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb4: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 4,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb5: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 5,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb6: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 6,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb7: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 7,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb8: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 8,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb9: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 9,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    flg: {
      empty: false,
      componentName: 'Flag',
      horizontalGridCount: 8,
      verticalGridCount: 2,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/falg.png')})`,
        backgroundSize: 'contain'
      }
    },
    f20: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 20,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/floor.png')})`,
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
