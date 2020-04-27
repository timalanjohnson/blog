import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

import "./layout.css"

const Layout = ({ location, title, children }) => {
  let header
  let nav

  header = (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )

  nav = (
    <nav>
      <ul
        style={{
          display: `grid`,
          gridGap: `16px`,
          gridTemplateColumns: `auto`,
          justifyContent: `flex-end`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li><Link to={`/contact`}>{`Contact`}</Link></li>
      </ul>
    </nav>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header style={{display: `grid`, gridTemplateColumns: `1fr 1fr`}}>{header}{nav}</header>
      <main>{children}</main>
      <footer style={{textAlign: `center`, color: `rgba(20, 20, 20, 0.5)`}}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org">Gatsby</a>. View source on
        {` `}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/timalanjohnson/blog">GitHub</a>.
      </footer>
    </div>
  )
}

export default Layout
