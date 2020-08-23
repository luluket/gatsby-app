import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import "../components/bootstrap.css"
import Title from "../components/Title"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Sponsors from "../components/Sponsors.js"
import Footer from "../components/Footer.js"
import Subtitle from "../components/Subtitle.js"
import Blogs from "../components/Blogs"
import Products from "../components/Products"
import Slider from "../components/Slider"

const IndexPage = ({ data }) => (
  <Layout>
    <Title title="Be healthy, stay strong" />
    <div class="container">
      <SEO title="Healthy&Fit" />
      <Slider data={data.allFile.nodes} />
      <hr></hr>
      <Subtitle subtitle="We recommend" />
      <Products items={data.products.nodes} />
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
