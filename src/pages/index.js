import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import {FaChessRook} from 'react-icons/fa';
import {FaChessQueen} from 'react-icons/fa';
import {FaChessKing} from 'react-icons/fa';
class IndexPage extends React.Component {
  render() {
    const siteTitle = "Online-schaakcompetitie-partijen"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <section className="row">
        <div className="col-12 embed-responsive embed-responsive-21by9">
            <video className="video-fluid" autoPlay loop muted>
      <source src="./chess.mp4" type="video/mp4" />
    </video>
    </div>
    </section>
        <HomeList className="row mt-5">
          <li className="col-12">
            <Link  className="text-success" state={{ category: "Groep A", round: "1" }}to="/blog/">
            <FaChessKing/>
              <Button>Groep A</Button>
            </Link>
          </li>
          <li className="col-12">
          <Link className="text-info" state={{ category: "Groep B", round: "1" }}to="/blog/">
          <FaChessQueen />
            <Button>Groep B</Button>
          </Link>
          </li>
          <li className="col-12">
          <Link className="text-warning" state={{ category: "Groep C", round: "1"  }}to="/blog/">
          <FaChessRook />
            <Button>Groep C</Button>
          </Link>
          </li>
        </HomeList>
      </Layout>
    )
  }
}
const HomeList = styled.ul `
  list-style: none;
  text-align: center;
  position: relative;

  li {
    margin-bottom: 40px;
    a {
      position: relative;
      border-bottom: 3px solid #404040;
    button {
        display:block;
        vertical-align: middle;
        border-radius: 20px;
        padding: 65px 40px;
        position: relative;
        width: 96%;
        margin: 30px auto 0;
        @media(min-width: 576px) {
            display: inline-block;
            width: auto;
            min-width: 325px;
                margin: 0 0 0 60px;
          }
        }
        svg {
          font-size: 3em;
          background: #404040;
          border-radius: 50%;
          padding: 1rem;
          width: 100px;
          height:100px;
          @media(min-width: 576px) {
            margin-right: 1.5rem;

          }
        }

      }
      }
      &:after {
        content: "";
        width: 3px;
        position: absolute;
        top: 0;
        bottom: 50px;
        left: 50%;
        background: #404040;
        z-index: -1;
    }
  }
`;

export default IndexPage
