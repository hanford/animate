import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class BounceUp extends React.Component {
  static defaultProps = {
    reveal: true,
    delay: 0
  };

  render() {
    const { reveal, delay, children } = this.props;

    return (
      <Spring
        delay={delay}
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
            transform: `translateY(${translateY}px) scale(${scale})`
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

export default BounceUp;
