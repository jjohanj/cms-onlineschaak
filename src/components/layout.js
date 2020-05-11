import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./styles.css"
import "./bootstrap.css"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <>
        <h1>
            {title}
        </h1>

        </>
      )
    } else {
      header = (
        <h1 className="my-5 pt-4 pb-2 text-left">
            {title}
        </h1>
      )
    }
    return (
      <div className="relative wrapper">
          <header className="container">{header}</header>
          <main className="container">{children}</main>
        <Footer className="container mt-5">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.netlifycms.org/">Netlify CMS</a>
        </Footer>
        </div>
    )
  }
}

const Footer = styled.footer`
  text-align: right;
}
`

export default Layout
