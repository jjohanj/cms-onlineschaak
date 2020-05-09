import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import styled from "styled-components"
import {FaChessPawn} from 'react-icons/fa'

class Blog extends React.Component {
  constructor(props) {
  super(props);
    this.state = {posts: this.props.data.allMdx.edges, category: "", round: "5"}
}
UNSAFE_componentWillMount() {
  if (typeof window == 'undefined') {
    return;
  }
  this.setState({ round:this.props.location.state.round, category: this.props.location.state.category});
}

  handleRound = (select) => {
    this.setState({ round: select});
  }
  render() {
    console.log(this.state.round);
    console.log(this.state.category);

    return (
      <Layout location={this.props.location} title={this.state.category}>
        <SEO title="All posts" title="Blog" />
        <div style={{ margin: "15px 0 40px" }}>
        <List>
        <li><button className="btn btn-white btn-sm m-1" onClick={(event) => { this.handleRound(5);}}>Ronde 5</button></li>
        <li><button className="btn btn-white btn-sm m-1" onClick={(event) => { this.handleRound(6);}}>Ronde 6</button></li>
        <li><button className="btn btn-white btn-sm m-1" onClick={(event) => { this.handleRound(7);}}>Ronde 7</button></li>
        <li><Link to="/">
          <button className= "btn m-1">Home</button>
        </Link></li>
        </List>
        <GameList>
        <h2 className="text-success h2 py-4">Ronde {this.state.round}</h2>
          {this.state.posts.filter(e => e.node.frontmatter.category.includes(this.state.category) && e.node.frontmatter.description.includes(this.state.round)).map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li key={node.fields.slug}>
                  <Link className="text-info"
                    to={`blog${node.fields.slug}`}
                  >
                    <FaChessPawn className="mr-3 text-white"/>{title}
                  </Link>
              </li>
            )
          })}
          </GameList>
        </div>
      </Layout>
    )
  }
}

const GameList = styled.ul `
  list-style: none;
  li {
    position: relative;
    border-radius: 2px;
    margin: 0;
    font-size: 1.3em;
    position: relative;
    padding-left: 1rem;

    a {
      color: #e3e3e3;
      display: block;
      padding: 1rem;
    }
    svg {
      font-size: 0.8em;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);    }
  }
`;


const List = styled.ul`
    list-style: none;
    margin: 0;
    li {
      margin: 0;
      display: inline-block;
      &:last-child button {
        border: none;
        background: linear-gradient(145deg, #2d2d2d, #363636);
        box-shadow:  3px 3px 1px #161616,
        -3px -3px 1px #4f4f4f;
        color: #E3E3d3;
        &:hover {
          box-shadow: inset 1px 1px 2px #161616,
              inset -1px -1px 2px #4f4f4f;
        }
      }
    }
  `

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            category
            iframe
          }
        }
      }
    }
  }
`
