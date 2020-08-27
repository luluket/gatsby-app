import React from "react"
import Layout from "../components/Layout"
import Subtitle from "../components/Subtitle"
const ComponentName = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <Subtitle subtitle={data.training.title}></Subtitle>

        <ul class="list-group m-5">
          {data.training.day.map(day => {
            return (
              <li className="list-group-item p-0">
                <h3 className="text-center bg-light m-0 p-1">{day.day}</h3>
                <h4 className="text-center font-weight-bold bg-light m-0 p-1">
                  {day.part}
                </h4>
                {day.exercises.map(exercise => {
                  return (
                    <div className="d-flex p-2">
                      <div
                        className="mr-3"
                        style={{
                          width: "150px",
                          height: "150px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={exercise.image.publicURL}
                          className="mw-100 h-auto"
                        ></img>
                      </div>
                      <div>
                        <div className="font-weight-bold">{exercise.name}</div>
                        <div>{exercise.info}</div>
                      </div>
                    </div>
                  )
                })}
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query GetSingleTraining($title: String) {
    training: strapiTrainings(title: { eq: $title }) {
      title
      image {
        relativePath
      }
      day {
        day
        part
        exercises {
          name
          info
          image {
            publicURL
          }
        }
      }
    }
  }
`
export default ComponentName
