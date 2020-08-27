import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
export default function Trainings({ data }) {
  return (
    <div className="row p-5">
      {data.map(training => {
        return (
          <div className="col-6 card">
            <div
              className="text-center font-weight-bold "
              style={{ fontSize: "20px" }}
            >
              {training.title}
            </div>
            <Link to={`/training/${training.title}`}>
              <div className="d-flex">
                <Img
                  fluid={training.image.childImageSharp.fluid}
                  className="h-100 w-100 mt-auto"
                ></Img>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
