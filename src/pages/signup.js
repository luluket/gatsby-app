import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

export default function signup() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="d-flex mt-5">
        <img src={logo} className="mw-100 h-auto" alt=""></img>
      </div>
      <div className="bg-light d-flex flex-column p-5 mt-5">
        <h3>sign up</h3>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Full name" />
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Username" />
        </div>
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <div class="input-group mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Repeat password"
          />
        </div>

        <button type="button" className="btn btn-secondary mt-auto">
          Sign up
        </button>
      </div>
      <Link to="/" className="btn btn-info mt-3 d-block">
        Back to home
      </Link>
    </div>
  )
}
