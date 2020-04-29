import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
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
  color: inherit;
  border-radius: 20px;
`



export default Button
