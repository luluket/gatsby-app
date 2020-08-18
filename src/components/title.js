import React from "react"

export default function title({ title }) {
  return (
    <div className="row mx-auto">
      <div className="col text-center py-5">
        <h1 className="font-weight-bold mb-0">{title}</h1>
      </div>
    </div>
  )
}
