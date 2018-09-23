import * as React from "react";
import { keyframes, css } from "emotion";
import idx from "idx";

const SwingAnimation = keyframes`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;

const SwingClass = css`
  animation: ${SwingAnimation} 1s;
  transform-origin: top center;
`;

class SwingComponent extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    const childClassname = idx(children, _ => _.props.className) || "";

    return React.cloneElement(children, {
      ...children.props,
      className: `${childClassname} ${reveal ? SwingClass : ""}`
    });
  }
}

export default SwingComponent;
