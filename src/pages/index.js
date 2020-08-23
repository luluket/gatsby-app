import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/bootstrap.css"
import Title from "../components/title"
import { Carousel } from "react-bootstrap"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Sponsors from "../components/sponsors.js"
import Footer from "../components/footer.js"
import Subtitle from "../components/subtitle.js"
import Blogs from "../components/Blogs"

const IndexPage = ({ data }) => (
  <Layout>
    <Title title="Be healthy, stay strong" />

    <div class="container">
      <SEO title="Healthy&Fit" />

      <Carousel interval="3000">
        {data.allFile.nodes.map(node => {
          return (
            <Carousel.Item>
              <Img
                fluid={node.childImageSharp.fluid}
                className="d-block w-100"
              />
              <Carousel.Caption />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <Subtitle subtitle="We recommend" />
      <div className="d-flex flex-column pt-5">
        <div className="products-container d-flex justify-content-lg-center pb-5 flex-wrap">
          {data.products.nodes.map(product => {
            return (
              <div
                key={product.id}
                className="card col-lg-3 col-md-4 col-sm-6 col-6 p-1 border-0"
              >
                <Link
                  to={`/shop/${product.slug}`}
                  className="text-decoration-none text-dark"
                  key={product.id}
                >
                  <div class="card-header h-auto p-0">
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

        <div className="d-flex justify-content-center ">
          <Link to="/shop" className="btn btn-info">
            See more
          </Link>
        </div>
      </div>
      <Subtitle subtitle="Latest posts" />
      <Blogs blogs={data.blogs.nodes} title="blog"></Blogs>
      <div className="d-flex justify-content-center pb-5">
        <Link to="/blog" className="btn btn-info">
          See more
        </Link>
      </div>
      <Sponsors />
    </div>
    <Footer />
  </Layout>
)

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

    products: allStrapiProducts(
      limit: 3
      filter: { category: { eq: "vitamins" } }
    ) {
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
    blogs: allStrapiBlogs(limit: 3, sort: { order: DESC, fields: date }) {
      nodes {
        date(formatString: "DD/MM/YYYY")
        desc
        id
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content
        category
      }
    }
  }
`

export default IndexPage
