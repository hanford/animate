// @flow

import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

export default class SlideLeft extends React.Component {
  static defaultProps = {
    reveal: true,
    from: -30
  };

  render() {
    const { reveal, children, from, ...props } = this.props;

    return (
      <Spring
        {...props}
        from={{
          opacity: 0,
          translateX: from
        }}
        to={{
          opacity: reveal ? 1 : 0,
          translateX: reveal ? 0 : from
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
