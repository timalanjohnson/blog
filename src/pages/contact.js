import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <article className="contactDetails">
        <h1>Contact</h1>
        <p>You can contact me via <a target="_blank" rel="noopener noreferrer" href="mailto:timjohnson.za@gmail.com">email</a> or one of the following social media channels:</p>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/timalanjohnson">Twitter</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://instagram.com/timalanjohnson">Instagram</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/timalanjohnson">LinkedIn</a></li>
        </ul>
      </article>
      <hr></hr>
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
