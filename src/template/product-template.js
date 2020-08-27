import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import Sponsors from "../components/sponsors"
import { FaCartArrowDown } from "react-icons/fa"
const ComponentName = ({ data }) => {
  return (
    <Layout>
      <section className="container py-3 ">
        <div className="row">
          <div className="col-6 mb-2 ">
            <Img
              fluid={data.product.image.childImageSharp.fluid}
              className=""
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

            <button className="btn btn-primary d-flex">
              <FaCartArrowDown className="align-self-center mr-2" />
              Add to cart
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="h5 pb-5">{data.product.info}</div>
        <Sponsors />
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
