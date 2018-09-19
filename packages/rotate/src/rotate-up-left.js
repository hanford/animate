import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

export default class RotateDownLeft extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    return (
      <Spring
        from={{
          opacity: 0,
          rotate3d: 45
        }}
        to={{
          opacity: reveal ? 1 : 0,
          rotate3d: reveal ? 0 : 45
        }}
        config={config.wobbly}
      >
        {({ opacity, rotate3d }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transformOrigin: "left bottom",
            transform: `rotate3d(0, 0, 1, ${rotate3d}deg)`
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
