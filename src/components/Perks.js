import React from "react"
import truck from "../images/perks/fast-delivery.svg"
import whey from "../images/perks/whey.svg"
import gym from "../images/perks/gym.svg"
import blog from "../images/perks/blogging.svg"
export default function Perks({ data }) {
  return (
    <div className="perks bg-light mx-auto d-flex justify-content-center">
      <div className="d-flex p-2 ml-2 mr-2">
        <div className="d-flex mr-2">
          <img
            src={truck}
            className="align-self-start"
            style={{ width: "40px", height: "40px" }}
            alt=""
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
            alt=""
          />
        </div>
        <div className="align-self-center">{data} proizvoda</div>
      </div>

      <div className="d-flex p-2 ml-2 mr-2">
        <div className="d-flex mr-2">
          <img
            src={gym}
            className="align-self-center"
            style={{ width: "40px", height: "40px" }}
            alt=""
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
            alt=""
          />
        </div>
        <div className="align-self-center">Fitness blog</div>
      </div>
    </div>
  )
}
