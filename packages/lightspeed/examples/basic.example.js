import React from "react";
import Animation from "../src/index";

export let name = "Basic";

export class Example extends React.Component {
  state = {
    reveal: false
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ reveal: !this.state.reveal })}>
          Reveal
        </button>

        <Animation reveal={this.state.reveal} {...this.props}>
          <div
            style={{
              maxWidth: 300,
              border: "1px solid gray",
              padding: 8,
              marginTop: 8,
              width: 300
            }}
          >
            <h1>React Component</h1>
          </div>
        </Animation>
      </React.Fragment>
    );
  }
}
