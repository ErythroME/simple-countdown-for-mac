import React, { Component } from "react"

import styled from "styled-components"

const CircleWrapper = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const Circle = ({ progress }) => {
  const ploar2Cartesian = (center, radius, angleInDegrees) => {
    const angleInRedians = (angleInDegrees - 90) * Math.PI / 180
    const x = center + radius * Math.cos(angleInRedians)
    const y = center + radius * Math.sin(angleInRedians)
    return { x, y }
  }

  const drawArc = endAngle => {
    const endAngleUsed = endAngle === 360 ? 359 : endAngle
    const radius = 150 - 8
    const start = ploar2Cartesian(150, radius, endAngleUsed)
    const end = ploar2Cartesian(150, radius, 0)
    const arcSweep = endAngle <= 180 ? 0 : 1
    return `M ${start.x} ${start.y}
            A ${radius} ${radius} 0 ${arcSweep} 0 ${end.x} ${end.y}`
  }

  return (
    <CircleWrapper
      viewBox="0, 0, 300, 300"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={drawArc(progress * 360)}
        fill="none"
        stroke="#cfcfcf"
        strokeWidth={15}
        strokeLinecap="round"
      />
    </CircleWrapper>
  )
}
export default Circle
