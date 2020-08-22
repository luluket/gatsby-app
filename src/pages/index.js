import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/bootstrap.css"
import Title from "../components/title"
import { Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Sponsors from "../components/sponsors.js"
import Footer from "../components/footer.js"

const IndexPage = ({ data }) => (
  <Layout>
    <Title title="Be healthy, stay strong" />

    <div class="container">
      <SEO title="Healthy&Fit" />
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
      <Sponsors />
    </div>
    <Footer />
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
