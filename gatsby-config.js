require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Aurelien Davennes',
    description: 'Born and raised in southern France, Aurélien (he/his) is doing his Ph.D. in American Studies and Ethnicity, with a focus on: anthropology, literary theory, affect studies, postcolonial studies, witchcraft and sorcery, magic, sexuality, and diaspora',
    siteUrl: `https://davennes.us`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "0x766f6964-aurelien-davennes.us",
        protocol: "https",
        hostname: "davennes.us"
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: 'https://davennes.us'
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xzq75axp1e5g`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        localeFilter: locale => locale.code === 'en-US',
        downloadLocal: true
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
