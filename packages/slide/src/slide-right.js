import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

export default class SlideRightReveal extends React.Component {
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
          translateX: 30
        }}
        to={{
          opacity: reveal ? 1 : 0,
          translateX: reveal ? 0 : 30
        }}
        config={config.wobbly}
      >
        {({ opacity, translateX }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `translateX(${translateX}px)`
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
