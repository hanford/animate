import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class FlipRight extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children, ...props } = this.props;

    return (
      <Spring
        {...props}
        from={{
          opacity: 0,
          rotate: 90
        }}
        to={{
          opacity: reveal ? 1 : 0,
          rotate: reveal ? 0 : 90
        }}
        config={config.wobbly}
      >
        {({ opacity, rotate }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            backfaceVisibility: "visible",
            opacity,
            transform: `perspective(400px) rotateY(${rotate}deg)`
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

export default FlipRight;
