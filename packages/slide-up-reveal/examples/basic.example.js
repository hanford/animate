import React from "react";
import SlideUp from "../src/index";

export let name = "Basic"

export class Example extends React.Component {
  state = {
    reveal: false
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ reveal: !this.state.reveal })}>
          Reveal
        </button>

        <SlideUp reveal={this.state.reveal}>
          <h1>Hello!</h1>
        </SlideUp>
      </React.Fragment>
    )
  }
}