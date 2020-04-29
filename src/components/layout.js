import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./styles.css"
import "./bootstrap.css"
import { rhythm, scale } from "../utils/typography"
import {FaChess} from 'react-icons/fa';

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
              <FaChess className="mr-4" />{title}
        </h1>

        </>
      )
    } else {
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
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="relative">
          <header className="container">{header}</header>
          <main className="container">{children}</main>
        <Footer className="container">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
        </div>
    )
  }
}

const Footer = styled.footer`
  text-align: center;
}
`

export default Layout
