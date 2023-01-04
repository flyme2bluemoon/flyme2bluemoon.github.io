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

const requestConfig = {
  method: "GET",
  headers: {
    "Authorization": `token ${process.env.GITHUB_TOKEN}`
  }
};

exports.sourceNodes = async({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // get data from Github API
  const api_response = await fetch("https://api.github.com/users/flyme2bluemoon/repos", requestConfig)
    .then(data => data.json())
    .then(res => {
      res.sort((a, b) => {
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      });
      return res;
    });
  
  let histogram = {};
  const languageResponses = [];

  // loop through each repo and create a node
  for (let i = 0; i < api_response.length; i++) {
    const repo = api_response[i];

    const og_image_url = await fetch(`https://github.com/${repo.full_name}`)
      .then(data => data.text())
      .then(text => {
        const og_regex = new RegExp(`https:\/\/opengraph\.githubassets\.com\/.*\/${repo.full_name}`);
        const matches = text.match(og_regex);
        return matches[0];
      });
    repo.og_image_url = og_image_url;

    const nodeMeta = {
      id: createNodeId(repo.full_name),
      parent: null,
      children: [],
      internal: {
        type: "RepoNode",
        contentDigest: createContentDigest(repo)
      }
    }

    const node = Object.assign({}, repo, nodeMeta);
    createNode(node);

    // build languages stats
    if (repo.langualge !== null) {
      const repoLanguages = await fetch(`https://api.github.com/repos/${repo.full_name}/languages`, requestConfig).then(res => res.json());
      languageResponses.push(repoLanguages);
    }
  }

  await Promise.all(languageResponses)
    .then((languages) => {
      for (let i = 0; i < languages.length; i++) {
        const languageIndex = Object.keys(languages[i]);
        for (let j = 0; j < languageIndex.length; j++) {
          histogram[languageIndex[j]] = (histogram[languageIndex[j]] ? histogram[languageIndex[j]] + languages[i][languageIndex[j]] : languages[i][languageIndex[j]]);
        }
      }
    });

  // @ts-expect-error
  histogram = Object.entries(histogram).sort(([,a],[,b]) => b-a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  const nodeMeta = {
    id: createNodeId("repoLanguages"),
    parent: null,
    children: [],
    histogram: JSON.stringify(histogram),
    internal: {
      type: "LanguagesNode",
      contentDigest: createContentDigest(histogram)
    }
  }

  createNode(Object.assign({}, histogram, nodeMeta));
};
