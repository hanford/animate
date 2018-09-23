import * as React from "react";
import { keyframes, css } from "emotion";
import idx from "idx";

const PulseAnimation = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const PulseClass = css`
  animation: ${PulseAnimation} 1s;
  transform-origin: center;
`;

class PulseComponent extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    const childClassname = idx(children, _ => _.props.className) || "";

    return React.cloneElement(children, {
      ...children.props,
      className: `${childClassname} ${reveal ? PulseClass : ""}`
    });
  }
}

export default PulseComponent;
