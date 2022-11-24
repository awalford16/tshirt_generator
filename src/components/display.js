import React, { Component } from "react"
import "./display.css"


export default class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main id="product-display">
        <img id="base-tshirt" src="https://imgs.search.brave.com/i7XaQIFpmOIqLMM020CN-FVJOIfR3nol8CtL4_-eFRM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5ncGl4LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8x/MC9QTkdQSVgtQ09N/LUJsYWNrLVQtU2hp/cnQtUE5HLVRyYW5z/cGFyZW50LUltYWdl/LTEtMTg1NXgyMDQ4/LnBuZw" width="400px" height="400px" />
        <img id="overlay-img" src={this.props.url} />
      </main>
    )
  }
}