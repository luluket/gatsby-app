import React from "react"
import { Link } from "gatsby"
export default function login() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div
        className="bg-light d-flex flex-column"
        style={{
          width: "400px",
          height: "300px",
          padding: "1.5rem",
          marginTop: "3rem",
        }}
      >
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
