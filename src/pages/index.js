// This is the homepage.

import React from "react"
import { graphql } from "gatsby"

import ItemThumbnail from "../components/ItemThumbnail/ItemThumbnail"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { ThumbnailsWrapper } from "./indexStyles"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const items = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All items" />
        <ThumbnailsWrapper>
          {items.map(({ node }) => {
            const { title, image } = node.frontmatter

            return (
              <ItemThumbnail
                key={node.fields.slug}
                link={node.fields.slug}
                heading={title}
                image={image.childImageSharp.fluid}
              />
            )
          })}
        </ThumbnailsWrapper>
      </Layout>
    )
  }
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
            title
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
