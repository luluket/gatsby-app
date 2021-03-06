import React, { Component } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
const getCategories = items => {
  let tempItems = items.map(items => {
    return items.category
    //for each menu item returnes category
  })
  let tempCategories = new Set(tempItems) // creates set of categories, dismissing repeating ones
  let categories = Array.from(tempCategories) //creates array of categories, so we don't operate with objects in set
  categories = ["all", ...categories] //existing categories are missing one category, using spread operator
  return categories
}

export default class Products extends Component {
  constructor(props) {
    //contentful items being send as props
    super(props)

    this.state = {
      items: props.items,
      shopItems: props.items,
      categories: getCategories(props.items),
    }
  }
  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  //filtering
  handleItems = category => {
    let tempItems = [...this.state.items] // array
    if (category === "all") {
      //showing every item on menu by clicking button 'all'
      this.setState(() => {
        return { shopItems: tempItems }
      })
    } else {
      //filtering items according to categories
      let items = tempItems.filter(node => node.category === category) //compare every item on menu to category we passed in handleItem
      this.setState(() => {
        return { shopItems: items } //shop items have been filtered
      })
    }
  }
  render() {
    if (this.state.items.length > 3) {
      return (
        <div class="container mt-5">
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {this.state.categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-outline-secondary text-capitalize m-1"
                    onClick={() => {
                      this.handleItems(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {this.state.shopItems.map(product => {
              return (
                <div
                  key={product.id}
                  className="card col-lg-4 col-md-6 col-sm-6 col-6 p-1 border-0"
                >
                  <Link
                    to={`/shop/${product.slug}`}
                    className="text-decoration-none text-dark"
                    key={product.id}
                  >
                    <div className="card-header p-0">
                      <Img fluid={product.image.childImageSharp.fluid}></Img>
                    </div>
                    <div className="card-body border">
                      <h5>{product.title}</h5>
                    </div>
                    <div className="card-footer">
                      <span>{product.price} kn</span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <div className="container mt-5">
          <div className="row mb-5">
            {this.state.shopItems.map(product => {
              return (
                <div
                  key={product.id}
                  className="card col-lg-4 col-md-6 col-sm-6 col-6 p-1 border-0"
                >
                  <Link
                    to={`/shop/${product.slug}`}
                    className="text-decoration-none text-dark"
                    key={product.id}
                  >
                    <div className="card-header p-0">
                      <Img fluid={product.image.childImageSharp.fluid}></Img>
                    </div>
                    <div className="card-body border">
                      <h5>{product.title}</h5>
                    </div>
                    <div className="card-footer">
                      <span>{product.price} kn</span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }
}
