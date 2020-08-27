import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Sponsors from "../components/Sponsors"
import Trainings from "../components/Trainings"
export default function training({ data }) {
  return (
    <Layout>
      <Title title="Vaši ciljevi"></Title>
      <div className="container">
        <Trainings data={data.trainings.nodes} />
        <hr></hr>
        <Sponsors />
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    trainings: allStrapiTrainings {
      nodes {
        title
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
