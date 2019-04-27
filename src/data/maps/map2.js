export default {
  previousMapName: 'map1',
  nextMapName: 'map3',
  floor: 'floor1',
  chips: `
bl em em em em em em em em em em em em em em em em em em bl
bl em em em em em em em em em em em em em em em em em em bl
bl em em em em em em em bl bl em em em em em em em em em bl
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
        backgroundColor: 'red'
      }
    }
  }
}
