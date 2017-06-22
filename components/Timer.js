import React, { Component } from "react"

import styled from "styled-components"

import Countdown from "./Countdown"
import Circle from "./Circle"
import Button from "./Button"
import Input from "./Input"

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CountdownWrapper = styled.div`
  width: 70vw;
  height: 70vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`
const Control = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100vw - 0.8em);
  margin: 0 0.4em;
  height: 50px;
`

export default class Timer extends Component {
  constructor(props) {
    super(props)

    this.totalSeconds = props.hours * 3600 + props.min * 60
    this.state = {
      totalSeconds: this.totalSeconds,
      time: { hours: 0, min: 0, sec: 0 }
    }

    this.setTimer = this.setTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.toggleTimer = this.toggleTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.updateTimer = this.updateTimer.bind(this)
  }

  setTimer() {
    const hours = Number.parseInt(this.refs.hours.input.value, 10) || 0
    const min = Number.parseInt(this.refs.minutes.input.value, 10) || 0
    this.totalSeconds = hours * 3600 + min * 60
    this.setState(
      {
        totalSeconds: this.totalSeconds,
        time: {
          hours: Math.floor(this.totalSeconds / 3600),
          min: Math.floor(this.totalSeconds % 3600 / 60),
          sec: this.totalSeconds % 3600 % 60
        }
      },
      this.updateTimer
    )
  }

  pauseTimer() {
    clearInterval(this.timer)
    this.timer = undefined
  }

  toggleTimer() {
    if (this.timer) {
      this.pauseTimer()
    } else {
      this.updateTimer()
    }
  }

  updateTimer() {
    this.timer = setInterval(() => {
      const totalSeconds = this.state.totalSeconds
      if (this.state.totalSeconds > 0) {
        const currentSeconds = totalSeconds - 1
        this.setState({
          totalSeconds: currentSeconds,
          time: {
            hours: Math.floor(currentSeconds / 3600),
            min: Math.floor(currentSeconds % 3600 / 60),
            sec: currentSeconds % 3600 % 60
          }
        })
      } else {
        this.resetTimer()
      }
    }, 1000)
    return this.timer
  }

  resetTimer() {
    this.setState({
      totalSeconds: 0,
      time: { hours: 0, min: 0, sec: 0 }
    })
    if (this.timer) {
      this.pauseTimer()
    }
  }

  render() {
    const { hours, min, sec } = this.state.time
    const progress =
      (this.totalSeconds - this.state.totalSeconds) / this.totalSeconds
    return (
      <TimerWrapper>
        <Control>
          <Input ref="hours" placeholder="hours" />
          <Input ref="minutes" placeholder="minutes" />
        </Control>
        <Control>
          <Button primary onClick={this.setTimer}>Start</Button>
          <Button onClick={this.toggleTimer}>Pause</Button>
          <Button onClick={this.resetTimer}>Stop</Button>
        </Control>
        <CountdownWrapper>
          <Circle progress={progress} />
          <Countdown hours={hours} min={min} sec={sec} />
        </CountdownWrapper>
      </TimerWrapper>
    )
  }
}
