import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class Flip extends React.Component {
  static defaultProps = {
    reveal: true,
    up: false,
    down: false,
    right: false,
    left: false
  };

  render() {
    const { reveal, children, up, down, right, left, ...props } = this.props;

    return (
      <Spring
        {...props}
        from={{
          opacity: 0,
          x: down ? 90 : up ? -90 : 0,
          y: right ? 90 : left ? -90 : 0
        }}
        to={{
          opacity: reveal ? 1 : 0,
          x: reveal ? 0 : down ? 90 : up ? -90 : 0,
          y: reveal ? 0 : right ? 90 : left ? -90 : 0
        }}
        config={config.wobbly}
      >
        {({ opacity, x, y }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            backfaceVisibility: "visible",
            opacity,
            transform: `perspective(400px) rotateX(${x}deg) rotateY(${y}deg)`
          };

          return React.cloneElement(children, {
            ...children.props,
            style
          });
        }}
      </Spring>
    );
  }
}

export default Flip;
