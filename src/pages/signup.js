import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

export default function signup() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="d-flex mt-5">
        <img src={logo} className="mw-100 h-auto" alt=""></img>
      </div>
      <form action="/" method="get">
        <div className="bg-light d-flex flex-column p-5 mt-5">
          <h3>Registracija</h3>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              required
              placeholder="Ime i prezime"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              required
              placeholder="Korisničko ime"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              required
              placeholder="Email"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              required
              placeholder="Lozinka"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Ponovi lozinku"
              required
            />
          </div>

          <button type="submit" className="btn btn-secondary mt-auto">
            Registriraj se
          </button>
        </div>
      </form>
      <Link to="/" className="btn btn-info mt-3 d-block">
        Povratak
      </Link>
    </div>
  )
}
