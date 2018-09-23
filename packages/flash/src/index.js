import * as React from "react";
import { keyframes, css } from "emotion";
import idx from "idx";

const FlashAnimation = keyframes`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;

const FlashClass = css`
  animation: ${FlashAnimation} 1s;
  transform-origin: center;
`;

class FlashComponent extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    const childClassname = idx(children, _ => _.props.className) || "";

    return React.cloneElement(children, {
      ...children.props,
      className: `${childClassname} ${reveal ? FlashClass : ""}`
    });
  }
}

export default FlashComponent;
