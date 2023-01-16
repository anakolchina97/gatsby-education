import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SinglePost = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, image } = data.markdownRemark.frontmatter
  const img = getImage(image)
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div className="img-post">
          <GatsbyImage image={img} alt={title} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
)

export default SinglePost

export const query = graphql`
  query PostQuery($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        url
        image {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }
`
