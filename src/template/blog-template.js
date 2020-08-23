import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Footer from "../components/footer"
import Sponsors from "../components/sponsors"
import ReactMarkdown from "react-markdown"
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaRedditSquare } from "react-icons/fa"

import "./blog-template.css"

const ComponentName = ({ data }) => {
  const { content } = data.blog
  return (
    <Layout>
      <section className="container pt-5">
        <div className="blog-content">
          <div className="d-flex">
            <div className="mr-3">
              <img
                src={data.blog.profileimg.childImageSharp.original.src}
                alt="profile-img"
                className="rounded-circle m-0"
                style={{ width: "50px", height: "50px" }}
              ></img>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div className="font-weight-bold">{data.blog.username}</div>
              <div>{data.blog.date}</div>
            </div>
          </div>
          <hr className="mb-0"></hr>
          <ReactMarkdown source={content} />
        </div>
        <div className="d-flex justify-content-center bg-light py-5">
          <div
            className="d-flex align-content-center "
            style={{ fontSize: "32px" }}
          >
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaRedditSquare />
          </div>
        </div>
        <Sponsors />
      </section>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      date(formatString: "DD/MM/YYYY")
      profileimg {
        relativePath
        childImageSharp {
          original {
            src
          }
        }
      }
      username
    }
  }
`

export default ComponentName
