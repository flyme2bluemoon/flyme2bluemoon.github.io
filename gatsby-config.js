const siteUrl = "https://flyme2bluemoon.github.io";

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Matthew Shen",
    siteUrl: siteUrl,
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
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-QZWHFGCR3R"],
        gtagConfig: {
          anonymize_ip: true
        }
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `query {
          allSitePage {
            nodes {
              path
              pageContext
            }
          }
        }`,
        createLinkInHead: true,
        output: "/sitemap",
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages }
        }) => {
          return allPages;
        },
        serialize: ({ path, pageContext }) => {
          return {
            url: path,
            lastmod: pageContext.modifiedGmt
          }
        }
      }
    }
  ]
}
