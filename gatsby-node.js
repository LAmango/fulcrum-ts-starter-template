const path = require(`path`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                templatekey
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      const pathStart = post.node.frontmatter.templatekey.split("-")[0];
      const { templatekey } = post.node.frontmatter;

      createPage({
        path: `${pathStart}${post.node.fields.slug}`,
        component: path.resolve(`./src/templates/${templatekey}.js`),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
