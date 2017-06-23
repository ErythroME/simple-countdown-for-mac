import React from "react"
import styled from "styled-components"

const CountdownDiv = styled.div`
  font-size: 16vw;
  line-height: 1;
  color: palevioletred;
  font-family: PingFangSC-Light, "helvetica neue", "hiragino sans gb", sans-serif
`

const Countdown = ({ hours, min, sec }) => {
  return <CountdownDiv>{hours}:{min}:{sec}</CountdownDiv>
}

export default Countdown
