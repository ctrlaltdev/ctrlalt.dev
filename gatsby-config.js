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
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
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
