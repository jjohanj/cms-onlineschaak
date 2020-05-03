import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import styled from "styled-components"

class Blog extends React.Component {
  constructor(props) {
  super(props);
    this.state = {posts: this.props.data.allMdx.edges, category: "all", round: "1"}
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
        <li><button onClick={(event) => { this.handleRound(1);}}>Ronde 1</button></li>
        <li><button onClick={(event) => { this.handleRound(2);}}>Ronde 2</button></li>
        <li><button onClick={(event) => { this.handleRound(3);}}>Ronde 3</button></li>
        <li><button onClick={(event) => { this.handleRound(4);}}>Ronde 4</button></li>
        <li><button onClick={(event) => { this.handleRound(5);}}>Ronde 5</button></li>
        <li><button onClick={(event) => { this.handleRound(6);}}>Ronde 6</button></li>
        <li><button onClick={(event) => { this.handleRound(7);}}>Ronde 7</button></li>
        <li><Link to="/">
          <button>Home</button>
        </Link></li>
        </List>
        <GameList>
        <h2>Ronde {this.state.round}</h2>
          {this.state.posts.filter(e => e.node.frontmatter.category.includes(this.state.category) && e.node.frontmatter.description.includes(this.state.round)).map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
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
    padding-left: 20px;
    &:before {
      content: "*";
      position: absolute;
      left: 0px;
    }
  }
`;


const List = styled.ul`
    list-style: none;
    margin: 0;
    li {
      display: inline-block;
      &:last-child button {
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
    button {
      background: #e3e3e3;
      color: #4f4f4f;
      cursor: pointer;
      border: none;
      padding: 0.5rem 0.6rem;
      margin: 0.7rem;
      border-radius: 2px;
      font-size: 0.9em;
      &:hover {
        box-shadow: inset 1px 1px 2px #161616,
            inset -1px -1px 2px #4f4f4f;
      }
      &:first-child {
        margin-left: 0;
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
