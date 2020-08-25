import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Sponsors from "../components/Sponsors"
import Img from "gatsby-image"
export default function training({ data }) {
  return (
    <Layout>
      <Title title="Vaši ciljevi"></Title>

      <div className="container">
        <div className="row p-5">
          <div className="col-6  card">
            <h2 className="text-center font-weight-bold">Mršavljenje</h2>

            <div className="d-flex">
              <Img
                fluid={data.loss.nodes[0].childImageSharp.fluid}
                className="h-100 w-100"
              ></Img>
            </div>
          </div>
          <div className="col-6 card">
            <h2 className="text-center font-weight-bold">Izgradnja</h2>
            <div className="d-flex"></div>
            <Img
              fluid={data.gains.nodes[0].childImageSharp.fluid}
              className="h-100 w-100"
            ></Img>
          </div>
        </div>
        <Sponsors />
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    loss: allFile(filter: { relativePath: { eq: "loss.jpg" } }) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    gains: allFile(filter: { relativePath: { eq: "gains.jpg" } }) {
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
