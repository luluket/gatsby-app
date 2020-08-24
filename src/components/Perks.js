import React from "react"
import truck from "../images/fast-delivery.svg"
import whey from "../images/whey.svg"
import gym from "../images/gym.svg"
import blog from "../images/blogging.svg"
export default function Perks() {
  return (
    <div className="perks bg-light mx-auto d-flex justify-content-center">
      <div className="d-flex p-2 ml-2 mr-2">
        <div className="d-flex mr-2">
          <img
            src={truck}
            className="align-self-start"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div className="align-self-center">Brza dostava</div>
      </div>

      <div className="d-flex p-2 ml-2 mr-2">
        <div className="d-flex mr-2">
          <img
            src={whey}
            className="align-self-center"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div className="align-self-center">10 proizvoda</div>
      </div>

      <div className="d-flex p-2 ml-2 mr-2">
        <div className="d-flex mr-2">
          <img
            src={gym}
            className="align-self-center"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div className="align-self-center">Trening savjeti</div>
      </div>

      <div className="d-flex p-2 ml-2 mr-2">
        <div className="d-flex mr-2">
          <img
            src={blog}
            className="align-self-center"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div className="align-self-center">Fitness blog</div>
      </div>
    </div>
  )
}
