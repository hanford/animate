import * as React from "react";
import { keyframes, css } from "emotion";
import idx from "idx";

const HeartBeatAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;

const HeartBeatClass = css`
  animation: ${HeartBeatAnimation} 1s;
  transform-origin: center;
`;

class HeartBeatComponent extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    const childClassname = idx(children, _ => _.props.className) || "";

    return React.cloneElement(children, {
      ...children.props,
      className: `${childClassname} ${reveal ? HeartBeatClass : ""}`
    });
  }
}

export default HeartBeatComponent;
