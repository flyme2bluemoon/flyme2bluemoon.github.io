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
