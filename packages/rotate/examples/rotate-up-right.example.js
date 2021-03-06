import React from "react";
import { RotateUpRight } from "../src";

export let name = "<RotateUpRight />";

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

        <RotateUpRight reveal={this.state.reveal}>
          <div
            style={{
              maxWidth: 300,
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: 4,
              padding: 8,
              marginTop: 8,
              width: 300
            }}
          >
            <h1>React Component</h1>
          </div>
        </RotateUpRight>
      </React.Fragment>
    );
  }
}
