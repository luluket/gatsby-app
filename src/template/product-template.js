import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaRedditSquare } from "react-icons/fa"
import Img from "gatsby-image"
import "./product-template.css"

const ComponentName = ({ data }) => {
  return (
    <Layout>
      <section className="container py-3">
        <div className="products-content d-flex">
          <div className="col-6 p-0 mb-2">
            <Img
              fluid={data.product.image.childImageSharp.fluid}
              className=" mr-3"
            ></Img>
          </div>
          <div className="col-6">
            <div className="h2">{data.product.title}</div>
            <span
              className="h4"
              style={{
                padding: "0.1rem",
                backgroundColor: "lightgray",
                borderRadius: "1rem",
                color: "white",
              }}
            >
              {data.product.category}
            </span>
            <hr></hr>
            <div className="h3">{data.product.price} kn</div>
            <hr></hr>

            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
        <div className="h4">{data.product.info}</div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: strapiProducts(slug: { eq: $slug }) {
      title
      info
      category
      price
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName
