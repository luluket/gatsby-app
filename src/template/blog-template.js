import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaRedditSquare } from "react-icons/fa"
import Img from "gatsby-image"

import "./blog-template.css"

const ComponentName = ({ data }) => {
  const { content } = data.blog
  return (
    <Layout>
      <section className="container py-3">
        <div className="blog-content">
          <div className="d-flex">
            <div className="mr-3">
              <img
                src={data.blog.profileimg.childImageSharp.original.src}
                className="rounded-circle m-0"
                style={{ width: "50px", height: "50px" }}
              ></img>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div className="font-weight-bold">{data.blog.username}</div>
              <div>{data.blog.date}</div>
            </div>
          </div>

          <ReactMarkdown source={content} />
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="d-flex align-content-center"
            style={{ fontSize: "32px" }}
          >
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaRedditSquare />
          </div>
        </div>
      </section>
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
