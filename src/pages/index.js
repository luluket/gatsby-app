import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/bootstrap.css"
import Title from "../components/title"
import { Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <div class="container">
      <SEO title="Healthy&Fit" />
      <Title title="Be healthy, stay strong" />
      <div>
        <Carousel interval="3000">
          {data.allFile.nodes.map(node => {
            return (
              <Carousel.Item>
                <Img
                  fluid={node.childImageSharp.fluid}
                  className="d-block w-100"
                />
                <Carousel.Caption />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default IndexPage
