import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class SlideDown extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, delay, children, ...props } = this.props;

    return (
      <Spring
        props={props}
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
