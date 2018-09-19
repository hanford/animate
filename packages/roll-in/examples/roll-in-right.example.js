import React from "react";
import { RollInRight } from "../src";

export let name = "<RollInRight />";

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

        <RollInRight reveal={this.state.reveal}>
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
        </RollInRight>
      </React.Fragment>
    );
  }
}
