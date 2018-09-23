import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class BounceDown extends React.Component {
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
          translateY: 40
        }}
        to={{
          opacity: reveal ? 1 : 0,
          scale: reveal ? 1 : 0.2,
          translateY: reveal ? 0 : 40
        }}
        config={config.wobbly}
      >
        {({ opacity, scale, translateY }) => {
          if (opacity === 0 && translateY === 40) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `translateY(-${translateY}px) scale(${scale})`
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

export default BounceDown;
