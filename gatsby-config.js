require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'CTRL ALT DEV',
    description: 'Yorick Demichelis',
    siteUrl: `https://ctrlalt.dev`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        indentedSyntax: true
      }
    },  
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CTRL ALT DEV`,
        short_name: `ctrlaltdev`,
        start_url: `/`,
        background_color: `#B3B3B3`,
        theme_color: `#FF00FF`,
        display: `minimal-ui`,
        icon: `static/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "0x766f6964-ctrlaltdev-ctrlalt.dev",
        protocol: "https",
        hostname: "ctrlalt.dev"
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: 'https://ctrlalt.dev'
      }
    },
    {
      resolve: 'gatsby-plugin-remove-generator',
      options: {
        content: 'An old Toaster in a Garage v1.6.3'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}
