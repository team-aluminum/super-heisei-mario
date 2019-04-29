export default {
  previousMapName: 'map9',
  nextMapName: null,
  chips: `
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp emp hd2 fem emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp emp hd3 fem fem emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp emp hd4 fem fem fem emp emp emp emp emp emp emp emp emp emp emp
emp emp emp emp hd5 fem fem fem fem emp emp emp emp emp emp emp emp emp emp emp
emp emp emp hd6 fem fem fem fem fem emp emp emp emp emp emp emp emp emp emp emp
emp emp hd7 fem fem fem fem fem fem emp emp emp emp emp emp emp emp emp emp emp
emp hd8 fem fem fem fem fem fem fem emp emp emp emp emp emp emp emp emp emp emp
hd9 fem fem fem fem fem fem fem fem emp emp emp emp emp emp emp emp emp emp emp
f19 fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    blk: {
      empty: false,
      componentName: 'Block',
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/block.gif')})`,
        backgroundSize: '30px 30px'
      }
    },
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
      componentName: 'HardBlock',
      horizontalGridCount: 11,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/falg.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f19: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 19,
      styles: {
        backgroundImage: `url(${require('@/assets/stage10/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  }
}
