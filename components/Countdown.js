import React from "react"
import styled from "styled-components"

const CountdownDiv = styled.div`
  font-size: 18vw;
  line-height: 1;
  color: palevioletred;
`

const Countdown = ({ hours, min, sec }) => {
  return <CountdownDiv>{hours}:{min}:{sec}</CountdownDiv>
}

export default Countdown
