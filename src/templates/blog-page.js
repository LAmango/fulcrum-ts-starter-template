import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

export const BlogPostTemplate = props => {
  return (
    <Layout location={props.location} title={props.title}>
      <SEO title={props.title} />
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      {props.image.childImageSharp ? (
        <Img fluid={props.image.childImageSharp.fluid} alt={props.title} />
      ) : (
        <img src={props.image} alt={props.title} />
      )}
      {props.isPreview ? (
        <ReactMarkdown source={props.html} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      )}
      <hr />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {props.previous && (
            <Link to={`blog${props.previous.fields.slug}`} rel="prev">
              ← {props.previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {props.next && (
            <Link to={`blog${props.next.fields.slug}`} rel="next">
              {props.next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

const BlogPost = props => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <BlogPostTemplate
      title={post.frontmatter.title}
      html={post.html}
      image={post.frontmatter.image}
      description={post.frontmatter.description}
      date={post.frontmatter.date}
      next={next}
      previous={previous}
    />
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
