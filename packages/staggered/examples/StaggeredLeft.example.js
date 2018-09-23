import React from "react";
import { StaggeredLeft as Animation } from "../src";

export let name = "<StaggeredLeft />";

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

        <Animation reveal={this.state.reveal}>
          <h1>🍅</h1>
          <h1>🍇</h1>
          <h1>🍎</h1>
          <h1>🍑</h1>
          <h1>🥥</h1>
          <h1>🍌</h1>
          <h1>🍍</h1>
          <h1>🍉</h1>
        </Animation>
      </React.Fragment>
    );
  }
}
