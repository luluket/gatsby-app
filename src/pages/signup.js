import React from "react"
import { Link } from "gatsby"
export default function signup() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div
        className="bg-light d-flex flex-column"
        style={{
          width: "400px",
          height: "450px",
          padding: "1.5rem",
          marginTop: "3rem",
        }}
      >
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
      <Link to="/" className="btn btn-info mt-3">
        Back to home
      </Link>
    </div>
  )
}
