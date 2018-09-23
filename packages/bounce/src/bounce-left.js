import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class BounceLeft extends React.Component {
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
          scale: 0.2,
          translateX: -100
        }}
        to={{
          opacity: reveal ? 1 : 0,
          scale: reveal ? 1 : 0.2,
          translateX: reveal ? 0 : -100
        }}
        config={config.wobbly}
      >
        {({ opacity, scale, translateX }) => {
          if (opacity === 0 && translateX === -100) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `translateX(${translateX}%) scale(${scale})`
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

export default BounceLeft;
