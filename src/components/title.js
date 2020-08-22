import React from "react"

export default function title({ title }) {
  return (
    <div
      className="row mx-auto bg-light"
      style={{ backgroundColor: "hsl(212, 33%, 89%)" }}
    >
      <div className="col text-center py-5">
        <h1 className="font-weight-bold mb-0">{title}</h1>
      </div>
    </div>
  )
}
