import React from "react";
import Bounce from "../src/index";

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

        <Bounce reveal={this.state.reveal}>
          <div style={{maxWidth: 150}}>
            <h1>Hello!</h1>
          </div>
        </Bounce>
      </React.Fragment>
    )
  }
}