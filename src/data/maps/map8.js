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
hdb emp emp emp emp emp emp emp emp emp emp hb2 fem emp emp emp emp emp emp emp
hb2 fem emp emp emp emp emp emp emp emp hb3 fem fem emp emp hdb emp emp emp emp
hb3 fem fem emp emp emp emp emp emp hb4 fem fem fem emp emp hb2 fem emp emp emp
hb4 fem fem fem emp emp emp emp hb5 fem fem fem fem emp emp hb3 fem fem emp emp
f14 fem fem fem fem fem fem fem fem fem fem fem fem emp emp f05 fem fem fem fem
`,
  chipMeta: {
    emp: { empty: true },
    fem: { empty: true },
    blk: {
      empty: false,
      componentName: 'Block',
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/block.gif')})`,
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
    f05: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 5,
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    },
    f14: {
      empty: false,
      componentName: 'Floor',
      horizontalGridCount: 14,
      styles: {
        backgroundImage: `url(${require('@/assets/stage8/floor.png')})`,
        backgroundSize: '30px 30px'
      }
    }
  }
}
