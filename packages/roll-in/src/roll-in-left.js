import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

export default class RollInLeft extends React.Component {
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
          rotate: -120,
          translateX: -100
        }}
        to={{
          opacity: reveal ? 1 : 0,
          rotate: reveal ? 0 : -120,
          translateX: reveal ? 0 : -100
        }}
        config={config.wobbly}
      >
        {({ opacity, rotate, translateX }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `translateX(${translateX}%) rotate3d(0, 0, 1, ${rotate}deg)`
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
