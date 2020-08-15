import React, { Component } from "react"
import { Link } from "gatsby"
import { GiBiceps } from "react-icons/gi"
import { FaCartArrowDown } from "react-icons/fa"
import logo from "../images/logo.png"

export default class navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/training",
        text: "training",
      },
      {
        id: 3,
        path: "/nutrition",
        text: "nutrition",
      },
      {
        id: 4,
        path: "/shop",
        text: "shop",
      },
      {
        id: 5,
        path: "/news",
        text: "news",
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
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <GiBiceps id="logo" />
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/webalys} */}
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
                    className="nav-link text-uppercase mr-3"
                    activeStyle={{ borderBottom: "3px solid" }}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="nav-item mr-3 my-1">
            {/*using snipcart service by adding class*/}
            <FaCartArrowDown className="cart-icon snipcart-checkout" />
          </div>
          <button
            id="login-button"
            className="btn text-uppercase btn-outline-dark"
          >
            login
          </button>
        </div>
      </nav>
    )
  }
}
