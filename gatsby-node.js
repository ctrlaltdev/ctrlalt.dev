const path = require('path')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const projects = require('./static/projects.json')

  for (const p of projects) {
    createPage({
      path: `/${p.id}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        project: p
      },
    })
  }
}
