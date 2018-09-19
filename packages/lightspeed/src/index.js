// @flow

import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

type Props = {
  reveal: boolean,
  children: React.Element
};

export default class LightSpeedReveal extends React.Component<Props> {
  render() {
    const { reveal, children } = this.props;

    return (
      <Spring
        from={{
          opacity: 0,
          skewX: -30,
          translate3d: 50
        }}
        to={{
          opacity: reveal ? 1 : 0,
          skewX: reveal ? 0 : -30,
          translate3d: reveal ? 0 : 50
        }}
        config={config.gentle}
      >
        {({ opacity, skewX, translate3d }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `translate3d(${translate3d}%, 0, 0) skewX(${skewX}deg)`
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
