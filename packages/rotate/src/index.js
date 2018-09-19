// @flow

import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

type Props = {
  reveal: boolean,
  children: React.Element
};

export default class RotateReveal extends React.Component<Props> {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    return (
      <Spring
        from={{
          opacity: 0,
          rotate3d: -200
        }}
        to={{
          opacity: reveal ? 1 : 0,
          rotate3d: reveal ? 0 : -200
        }}
        config={config.wobbly}
      >
        {({ opacity, rotate3d }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transformOrigin: "center",
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
