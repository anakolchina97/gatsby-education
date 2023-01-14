import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import gatsbyPng from "../images/gatsby-icon.png"

const Header = ({ siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `
  )

  console.log("site >>", site)

  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <img src={gatsbyPng} alt={"gatsby icon"} />
    </header>
  )
}

export default Header
