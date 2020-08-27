import React from "react"
import { Link } from "gatsby"
export default function SeeMore({ text, button, link }) {
  return (
    <div className=" d-flex flex-column align-items-center pt-5">
      <h2 className="text-center">{text}</h2>
      <Link to={link} className="btn btn-info">
        {button}
      </Link>
    </div>
  )
}
