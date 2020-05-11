import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Commento from "../components/commento"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={post.frontmatter.title}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <p style={{ textAlign: `center`,
                    marginTop: `1rem`}}>
        <Link className="btn btn-light" state={{  round: post.frontmatter.description, category: post.frontmatter.category}}to="/blog/">
        Terug
        </Link>
        <Link className="home-btn btn ml-3" to="/">Home
        </Link>
        </p>
        <div className="icontainer mt-5">
        <iframe title={post.frontmatter.title} className="responsive-iframe" src={`https://lichess.org/embed/${post.frontmatter.iframe}#0?theme=auto&bg=auto`}
          width="600" height="397"></iframe>
          </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
        category
        iframe
      }
    }
  }
`


// <MDXRenderer>{post.body}</MDXRenderer>
