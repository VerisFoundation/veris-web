import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  bodyColor: '#0F3552',
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['300']
    },
    {
      name: 'Open Sans',
      styles: ['300', '400', '700']
    }
  ],
  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  headerWeight: 300,
  bodyWeight: 400
})

export default typography
