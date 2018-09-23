import * as React from "react";
import { keyframes, css } from "emotion";
import idx from "idx";

const WobbleAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const WobbleClass = css`
  animation: ${WobbleAnimation} 1s;
  transform-origin: center;
`;

class WobbleComponent extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    const childClassname = idx(children, _ => _.props.className) || "";

    return React.cloneElement(children, {
      ...children.props,
      className: `${childClassname} ${reveal ? WobbleClass : ""}`
    });
  }
}

export default WobbleComponent;
