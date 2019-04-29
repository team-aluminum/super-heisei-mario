export default {
  previousMapName: 'map7',
  nextMapName: 'map9',
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
hdb emp emp emp emp emp emp emp emp emp emp hd2 fem emp emp emp emp emp emp emp
hd2 fem emp emp emp emp emp emp emp emp hd3 fem fem emp emp hdb emp emp emp emp
hd3 fem fem emp emp emp emp emp emp hd4 fem fem fem emp emp hd2 fen emp emp emp
hd4 fem fem fem emp emp emp emp hd5 fem fem fem fem emp emp hd3 fem fem emp emp
f19 fem fem fem fem fem fem fem fem fem fem fem fem emp emp fem fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    blk: {
      empty: false,
      componentName: 'Block',
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hdb: {
      empty: false,
      componentName: 'HardBlock',
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb2: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 2,
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb3: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 3,
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb4: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 4,
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    hb5: {
      empty: false,
      componentName: 'HardBlock',
      horizontalGridCount: 5,
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/hard_block.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f19: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 19,
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  }
}
