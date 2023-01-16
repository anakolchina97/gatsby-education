import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout>
      <div className="posts">
        {nodes.map(post => {
          const { category, title, url, image } = post.frontmatter
          const img = getImage(image.childrenImageSharp[0].gatsbyImageData)
          return (
            <div className="post" key={post.id}>
              <GatsbyImage image={img} alt={"image"} />
              <Link className={styles.link} to={`/${category}/${url}`}>
                {title}
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

// постраничный запрос
// можно использовать только на страницах
// и в шаблонах
export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
          image {
            childrenImageSharp {
              gatsbyImageData(width: 200, formats: AUTO, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`
