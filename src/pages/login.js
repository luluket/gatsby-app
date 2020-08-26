import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

export default function login() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="d-flex mt-5">
        <img src={logo} className="mw-100 h-auto" alt=""></img>
      </div>
      <div className="bg-light d-flex flex-column p-5 mt-5">
        <h3>login</h3>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Username" />
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <a href="/#" style={{ fontSize: "13px" }} className="">
          Forgot your password?
        </a>
        <button
          type="button"
          className="btn btn-secondary d-inline-block mt-auto"
        >
          Log in
        </button>
      </div>
      <Link to="/" className="btn btn-info mt-3">
        Back to home
      </Link>
    </div>
  )
}
