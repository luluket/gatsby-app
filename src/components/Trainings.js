import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SeeMore from "./SeeMore"
export default function Trainings({ data }) {
  return (
    <>
      <div className="row p-2 mt-5 d-md-flex align-items-center justify-content-center">
        {data.map(training => {
          return (
            <div className="col-lg-6 col-md-8 card">
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
      <SeeMore
        text="Pronađite pravi proizvod za vaše ciljeve klikom na gumb ispod"
        button="Pogledaj proizvode"
        link="/shop"
      ></SeeMore>
    </>
  )
}
