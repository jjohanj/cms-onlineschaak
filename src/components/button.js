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
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 150px;
  height: 100px;
  border-radius: 10px;
  color: #e3e3e3;
  border-radius: 20px;
  background: linear-gradient(145deg, #2d2d2d, #363636);
  box-shadow:  10px 10px 9px #191919,
  -10px -10px 9px #4b4b4b;

  &:hover {

                 background: #323232;
                 box-shadow:  12px 12px 9px #191919,
                            -12px -12px 9px #4b4b4b;
  }
`

export default Button
