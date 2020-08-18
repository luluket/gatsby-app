import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <Blogs blogs={blogs} title="blog"></Blogs>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs {
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
export default Blog
