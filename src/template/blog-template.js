import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import "./blog-template.css"

const ComponentName = ({ data }) => {
  const { content } = data.blog
  return (
    <Layout>
      <section className="container py-3">
        <div className="blog-content">
          <ReactMarkdown source={content} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
