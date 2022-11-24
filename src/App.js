import './App.css';
import Display from './components/display';
import { Component, useEffect, useState } from "react"
import { OpenAI } from './logic/generator';
import Caption from './components/caption';

class App extends Component {
  constructor() {
    super();
    this.openaiHandler = new OpenAI()

    this.state = {
      url: "",
    }
  }

  generateImage = async (caption) => {
    const url = await this.openaiHandler.createImage(caption)
    this.setState({ url: url }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MyT</h1>
        </header>
        <main>
          <Caption submit={this.generateImage} />
          <Display url={this.state.url} />
        </main>
      </div>
    );
  }
}

export default App;
