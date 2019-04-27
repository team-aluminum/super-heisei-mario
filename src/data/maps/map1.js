export default {
  previousMapName: null,
  nextMapName: 'map2',
  floor: 'floor1',
  chips: `
em em em em em em em em em em em em em em em em em em em em
em em em em em em em em em em em em em em em em em em em em
em em em em em em em em em em bl bl em em em em em em em em
em em em em em em em em em em em em em em em em em em em em
em em em em em em em bl bl bl bl bl em em em em em em em em
em em em em em em em em em em em em em em em em em em em em
em em em em em em em em em em em em em em em em em em em em
`,
  chipMeta: {
    em: {
      empty: true
    },
    bl: {
      empty: false,
      componentName: 'Block',
      styles: {
        backgroundColor: 'brown'
      }
    }
  }
}
