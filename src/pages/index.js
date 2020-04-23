import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Online-schaakcompetitie-partijen"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Link state={{ category: "groepa" }}to="/blog/">
          <Button marginTop="35px">Groep A</Button>
        </Link>
        <Link state={{ category: "groepb" }}to="/blog/">
          <Button marginTop="35px">Groep B</Button>
        </Link>
        <Link state={{ category: "groepc" }}to="/blog/">
          <Button marginTop="35px">Groep C</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
