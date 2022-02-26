/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `Matthew Shen`,
      siteUrl: `https://flyme2bluemoon.github.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `src/images/logo.png`
      },
    },
    "gatsby-plugin-react-helmet"
  ]
}
