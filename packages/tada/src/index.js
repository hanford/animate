import * as React from "react";
import { keyframes, css } from "emotion";
import idx from "idx";

const TadaAnimation = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const TadaClass = css`
  animation: ${TadaAnimation} 1s;
`;

class TadaComponent extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    const childClassname = idx(children, _ => _.props.className) || "";

    return React.cloneElement(children, {
      ...children.props,
      className: `${childClassname} ${reveal ? TadaClass : ""}`
    });
  }
}

export default TadaComponent;
