import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: inline-block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 20px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 150px;
  font-size: 1.1em;
  height: auto;
  border-radius: 2px;
  color: #e3e3e3;
  border-radius: 20px;
  background: linear-gradient(145deg, #303030, #393939);
  box-shadow:  8px 8px 3px #161616,
               -8px -8px 3px #555555;

  &:hover {
    background: linear-gradient(145deg, #393939, #303030);
    box-shadow:  6px 6px 1px #161616,
                 -6px -6px 1px #555555;
  }
`



export default Button
