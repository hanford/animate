import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class SlideDown extends React.Component {
  static defaultProps = {
    reveal: true,
    from: -30
  };

  render() {
    const { reveal, delay, children, from, ...props } = this.props;

    return (
      <Spring
        props={props}
        from={{
          opacity: 0,
          translateY: from
        }}
        to={{
          opacity: reveal ? 1 : 0,
          translateY: reveal ? 0 : from
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
