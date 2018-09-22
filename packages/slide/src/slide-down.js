import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class SlideDown extends React.Component {
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
          translateY: -30
        }}
        to={{
          opacity: reveal ? 1 : 0,
          translateY: reveal ? 0 : -30
        }}
        config={config.wobbly}
      >
        {({ opacity, translateY }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `translateY(${translateY}px)`
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

export default SlideDown;
