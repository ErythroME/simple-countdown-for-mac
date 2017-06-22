import React, { Component } from "react"
import styled from "styled-components"

const InputStyles = styled.input`
  background-color: papayawhip;
  color: palevioletred;
  width:  50%;
  font-size: 1em;
  margin: 0.4em;
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  outline: none;
  text-align: center;
`

export default class Input extends Component {
  constructor() {
    super()

    this.state = { value: undefined }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    const { placeholder } = this.props
    return (
      <InputStyles
        innerRef={x => (this.input = x)}
        placeholder={placeholder}
        type="number"
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}
