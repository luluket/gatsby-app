import React from "react"
import { Link } from "gatsby"
export default function SeeMore({ text }) {
  return (
    <div className=" d-flex flex-column align-items-center pt-5">
      <h2 className="text-center">{text}</h2>
      <Link to="/contact" className="btn btn-info">
        Kontakt
      </Link>
    </div>
  )
}
