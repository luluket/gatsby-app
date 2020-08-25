import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Title from "../components/Title"
import { graphql, Link } from "gatsby"
import Sponsors from "../components/Sponsors.js"
import Subtitle from "../components/Subtitle.js"
import Blogs from "../components/Blogs"
import Products from "../components/Products"
import Slider from "../components/Slider"
import Perks from "../components/Perks"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Healthy&Fit" />
    <Title title="Fitness Facility"></Title>
    <hr className="m-0"></hr>
    <Perks />
    <div class="container">
      <Slider data={data.allFile.nodes} />

      <Subtitle subtitle="Naše preporuke" />
      <Products items={data.products.nodes} />
      <div className="d-flex justify-content-center ">
        <Link to="/shop" className="btn btn-info">
          Više
        </Link>
      </div>
      <hr></hr>
      <div className="p-5 d-flex flex-column align-items-center">
        <h2 className="text-center">
          Mršavljenje ili izgradnja? Pronađite odgovarajući plan treninga?
        </h2>
        <Link to="/training" className="btn btn-info">
          Plan treninga
        </Link>
      </div>
      <hr></hr>
      <Subtitle subtitle="Zadnje objave" />
      <Blogs blogs={data.blogs.nodes} title="blog"></Blogs>
      <div className="d-flex justify-content-center ">
        <Link to="/blog" className="btn btn-info">
          Više
        </Link>
      </div>
      <hr></hr>
      <div className=" d-flex flex-column align-items-center p-5">
        <h2 className="text-center">Imate pitanje? Kontaktirajte nas...</h2>
        <Link to="/contact" className="btn btn-info">
          Kontakt
        </Link>
      </div>
      <Sponsors />
    </div>
  </Layout>
)

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "slider" } }) {
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
