module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: 'UA-104490864-1'
      }
    }
  ]
}
