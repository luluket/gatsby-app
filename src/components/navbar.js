import React, { Component } from "react"
import { Link } from "gatsby"
import { FaCartArrowDown } from "react-icons/fa"
import logo from "../images/logo.png"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "naslovna",
      },
      {
        id: 2,
        path: "/training",
        text: "trening",
      },

      {
        id: 3,
        path: "/shop",
        text: "shop",
      },
      {
        id: 4,
        path: "/blog",
        text: "blog",
      },
      {
        id: 5,
        path: "/contact",
        text: "kontakt",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse",
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light overflow-hidden w-100"
        style={{ backgroundColor: "hsl(212, 33%, 89%)" }}
      >
        <Link to="/" className="navbar-brand p-0 d-flex align-content-center">
          {/* <GiBiceps id="logo" /> */}
          <img src={logo} style={{ height: "48px", width: "100px" }} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link
                    to={link.path}
                    className="nav-link text-uppercase mr-3 text-dark"
                    activeStyle={{ borderBottom: "3px solid" }}
                    style={{ fontSize: "18px" }}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>

          <FaCartArrowDown className="cart-icon" />

          <Link to="/login" className="btn">
            Prijava
          </Link>

          <Link to="/signup" className="btn btn-secondary">
            Registracija
          </Link>
        </div>
      </nav>
    )
  }
}
