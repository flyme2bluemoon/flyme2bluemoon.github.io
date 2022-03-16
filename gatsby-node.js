const { execSync } = require("child_process");

exports.onCreatePage = ({ page, actions }) => {
  const modifiedGmt = execSync(`git log --pretty=format:%at --follow -- ${page.component} | tail -n 1`).toString();
  actions.deletePage(page)
  actions.createPage({
    ...page,
    context: {
      ...page.context,
      modifiedGmt: new Date(modifiedGmt * 1000).toISOString()
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `);

  let tags = [];
  for (let i = 0; i < data.allMdx.nodes.length; i++) {
    tags = tags.concat(data.allMdx.nodes[i].frontmatter.tags);
  }
  tags = [...new Set(tags)];
  
  tags.forEach(tag => {
    actions.createPage({
      path: `/blog/tags/${tag.toLowerCase()}`,
      component: require.resolve("./src/pages/blog/tags/tags.tsx"),
      context: { tag: tag }
    });
  })
}
