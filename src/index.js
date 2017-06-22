import React from "react"
import ReactDOM from "react-dom"

import { injectGlobal } from "styled-components"

import Timer from "../components/Timer"

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: rgba(255, 255, 255, 0.96);
    text-align: center;
    display: flex;
    align-item: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    padding: 1.5rem 0;
  }
`

const app = document.getElementById("app")
ReactDOM.render(<Timer />, app)
