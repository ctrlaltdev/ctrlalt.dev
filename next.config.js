const withSass = require('@zeit/next-sass')
const projects = require('./components/Projects.json')

module.exports = withSass({
  exportTrailingSlash: true,
  exportPathMap: () => {
    const paths = {
      '/': { page: '/' }
    }

    for (const p of projects) {
      paths[`/${p.id}`] = { page: '/[id]', query: { id: p.id } }
    }

    return paths
  }
})
