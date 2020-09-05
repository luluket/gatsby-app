import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

export default function login() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="d-flex mt-5">
        <img src={logo} className="mw-100 h-auto" alt=""></img>
      </div>
      <form action="/" method="get">
        <div className="bg-light d-flex flex-column p-5 mt-5">
          <h3>login</h3>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <a href="/#" style={{ fontSize: "13px" }} className="">
            Forgot your password?
          </a>

          <button
            type="submit"
            value="Log in"
            className="btn btn-secondary mt-2  "
          >
            Log in
          </button>
        </div>
      </form>
      <Link to="/" className="btn btn-info mt-3">
        Povratak
      </Link>
    </div>
  )
}
