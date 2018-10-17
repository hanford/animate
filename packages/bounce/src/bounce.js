import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class Bounce extends React.Component {
  static defaultProps = {
    reveal: true,
    up: false,
    down: false,
    left: false,
    right: false
  };

  render() {
    const { reveal, up, down, left, right, children, ...props } = this.props;

    return (
      <Spring
        {...props}
        from={{
          opacity: 0,
          scale: 0.2,
          transformY: up ? 40 : down ? -40 : 0,
          transformX: left ? -100 : right ? 100 : 0
        }}
        to={{
          opacity: reveal ? 1 : 0,
          scale: reveal ? 1 : 0.2,
          transformY: up ? (reveal ? 0 : 40) : down ? (reveal ? 0 : -40) : 0,
          transformX: left
            ? reveal
              ? 0
              : -100
            : right
              ? reveal
                ? 0
                : 100
              : 0
        }}
        config={config.wobbly}
      >
        {({ opacity, scale, transformX, transformY }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `translate3d(${transformX}px, ${transformY}px, 0) scale(${scale})`
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

export default Bounce;
