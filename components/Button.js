import React from "react"
import styled from "styled-components"

const ButtonStyles = styled.button`
  background-color: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  width: 33%;
  font-size: 1em;
  margin: 0.4em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: none;
`

const Button = ({ primary, children, onClick }) =>
  <ButtonStyles primary={primary} onClick={onClick}>{children}</ButtonStyles>

export default Button
