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

  return graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
      products: allStrapiProducts {
        nodes {
          slug
        }
      }
      trainings: allStrapiTrainings {
        nodes {
          title
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.blogs.nodes.forEach(blog => {
      createPage({
        path: `/blogs/${blog.slug}`,
        component: path.resolve(`src/template/blog-template.js`),
        context: {
          slug: blog.slug,
        },
      })
    })
    result.data.products.nodes.forEach(product => {
      createPage({
        path: `/shop/${product.slug}`,
        component: path.resolve(`src/template/product-template.js`),
        context: {
          slug: product.slug,
        },
      })
    })
    result.data.trainings.nodes.forEach(training => {
      createPage({
        path: `/training/${training.title}`,
        component: path.resolve(`src/template/training-template.js`),
        context: {
          title: training.title,
        },
      })
    })
  })
}
