import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Sponsors from "../components/Sponsors.js"
import Products from "../components/Products.js"
import Title from "../components/Title.js"

export default function shop({ data }) {
  return (
    <Layout>
      <Title title="Shop"></Title>
      <div class="container">
        <Products items={data.products.nodes} />
        <hr></hr>
        <Sponsors />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    products: allStrapiProducts {
      nodes {
        id
        price
        slug
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
