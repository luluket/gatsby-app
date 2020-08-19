import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Img from "gatsby-image"
import "../components/shop.css"
export default function shop({ data }) {
  return (
    <Layout>
      <div class="container">
        <Title title="Shop"></Title>
        <div className="products-container d-flex flex-wrap ">
          {data.products.nodes.map(product => {
            return (
              <div
                key={product.id}
                className="card col-lg-4 col-md-6 col-sm-6 col-6 p-1 border-0"
              >
                <div class="card-header p-0">
                  <Img fluid={product.image.childImageSharp.fluid}></Img>
                </div>
                <div class="card-body border">
                  <h5>{product.title}</h5>
                </div>
                <div class="card-footer">
                  <span>{product.price} kn</span>
                </div>
              </div>
            )
          })}
        </div>
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
