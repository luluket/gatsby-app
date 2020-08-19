/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/template/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
}
