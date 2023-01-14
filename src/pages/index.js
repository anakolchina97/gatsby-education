import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  console.log(nodes)
  return (
    <Layout>
      <div>
        {nodes.map(post => {
          const { category, title, url } = post.frontmatter
          return (
            <Link
              className={styles.link}
              to={`/${category}/${url}`}
              key={post.id}
            >
              {title}
            </Link>
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
        }
        id
      }
    }
  }
`
