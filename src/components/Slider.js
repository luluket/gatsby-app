import React from "react"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"
export default function Slider({ data }) {
  return (
    <Carousel interval="3000">
      {data.map(node => {
        return (
          <Carousel.Item>
            <Img
              fluid={node.childImageSharp.fluid}
              className="w-100 d-block h-auto mw-100"
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
