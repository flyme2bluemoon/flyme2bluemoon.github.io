const siteUrl = "https://flyme2bluemoon.github.io";

require("dotenv").config({
  path: `.env`,
});

if (process.env.GITHUB_TOKEN === undefined) {
  throw new Error("process.env.GITHUB_TOKEN is undefined");
}

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Matthew Shen",
    siteUrl: siteUrl,
  },
  pathPrefix: "/~mshen",
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`
          }
        ]
      }
    },
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
          anonymize_ip: true,
          cookie_flags: "SameSite=None; Secure"
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
