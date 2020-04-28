import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Online-Schaakcompetitie-Partijen"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <HomeList>
          <li>
          <Link state={{ category: "Groep A", round: "1" }}to="/blog/">
            <Button marginTop="35px">Groep A</Button>
          </Link>
          </li>
          <li>
          <Link state={{ category: "Groep B", round: "1" }}to="/blog/">
            <Button marginTop="35px">Groep B</Button>
          </Link>
          </li>
          <li>
          <Link state={{ category: "Groep C", round: "1"  }}to="/blog/">
            <Button marginTop="35px">Groep C</Button>
          </Link>
          </li>
        </HomeList>
      </Layout>
    )
  }
}
const HomeList = styled.ul `
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 4rem;

  li {
    margin-bottom: 40px;
    margin-left: 40px;
  }
`;

export default IndexPage
