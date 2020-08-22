import React, { Component } from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Title from "../components/title"
import "../components/shop.css"
import Sponsors from "../components/sponsors.js"
import Footer from "../components/footer.js"
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

export default class shoptest extends Component {
  constructor(props) {
    //contentful items being send as props
    super(props)

    this.state = {
      items: props.data.products.nodes,
      shopItems: props.data.products.nodes,
      categories: getCategories(props.data.products.nodes),
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
      let items = tempItems.filter(node => node.category == category) //compare every item on menu to category we passed in handleItem
      this.setState(() => {
        return { shopItems: items } //shop items have been filtered
      })
    }
  }
  render() {
    return (
      <Layout>
        <Title title="Shop"></Title>
        <div class="container my-5">
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
          <div className="products-container d-flex flex-wrap ">
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
                    <div class="card-header p-0">
                      <Img fluid={product.image.childImageSharp.fluid}></Img>
                    </div>
                    <div class="card-body border">
                      <h5>{product.title}</h5>
                    </div>
                    <div class="card-footer">
                      <span>{product.price} kn</span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <Sponsors />
        <Footer />
      </Layout>
    )
  }
}
export const query = graphql`
  {
    products: allStrapiProducts {
      nodes {
        id
        price
        slug
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
