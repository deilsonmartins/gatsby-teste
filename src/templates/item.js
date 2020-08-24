// This is the template for each programmatically generated item in the shop. It will be populated with data from markdown files in the content folder.

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import {
  Heading,
  ImgStyled,
  Price,
  Description,
  Dropdown,
  DropdownOption,
  BuyButton,
} from "./itemStyles"

class Item extends React.Component {
  state = {
    selected: this.props.data.markdownRemark.frontmatter.customField[0].name,
  }

  setSelected = value => {
    this.setState({ selected: value })
  }

  // create the string required by snipcart to allow price changes based on option chosen
  createString = values => {
    return values
      .map(option => {
        const price =
          option.priceChange >= 0
            ? `[+${option.priceChange}]`
            : `[${option.priceChange}]`
        return `${option.name}${price}`
      })
      .join("|")
  }

  // calculate price based on option selected for display on item page
  GetPrice = values => {
    const selectedOption = values.find(
      option => option.name === this.state.selected
    )
    return selectedOption.priceChange.toFixed(2)
  }

  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Heading>{item.frontmatter.title}</Heading>

        <ImgStyled fluid={item.frontmatter.image.childImageSharp.fluid} />

        <Description>{item.frontmatter.description}</Description>

        <Price>R${this.GetPrice(item.frontmatter.customField)}</Price>

        <Dropdown
          id={item.frontmatter.customField.name}
          onChange={e => this.setSelected(e.target.value)}
          value={this.state.selected}
        >
          {item.frontmatter.customField.map(option => (
            <DropdownOption key={option.name}>{option.name}</DropdownOption>
          ))}
        </Dropdown>

        <BuyButton
          className="snipcart-add-item"
          data-item-id={item.frontmatter.id}
          data-item-price={this.GetPrice(item.frontmatter.customField)}
          data-item-name={item.frontmatter.title}
          data-item-description={item.frontmatter.description}
          data-item-image={item.frontmatter.image.childImageSharp.fluid.src}
          data-item-url={
            "https://gatsby-snipcart-starter.netlify.com" + item.fields.slug
          } //REPLACE WITH OWN URL
          data-item-custom1-name={
            item.frontmatter.customField
              ? item.frontmatter.customField.name
              : null
          }
          data-item-custom1-options={this.createString(
            item.frontmatter.customField
          )}
          data-item-custom1-value={this.state.selected}
        >
          Adicionar ao Carrinho
        </BuyButton>
      </Layout>
    )
  }
}

export default Item

export const pageQuery = graphql`
  query ItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        id
        image {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        customField {
          name
          priceChange
        }
      }
    }
  }
`
