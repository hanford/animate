// @flow

import * as React from "react";
import { Trail, config } from "react-spring";
import idx from "idx";

type Props = {
  children: React.Element,
  reveal: boolean
};

export default class StaggeredReveal extends React.Component<Props> {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    return (
      <Trail
        from={{
          opacity: 0,
          translateX: 40
        }}
        to={{
          opacity: reveal ? 1 : 0,
          translateX: reveal ? 0 : 40
        }}
        keys={React.Children.map(children, (child, index) => index)}
        config={config.wobbly}
      >
        {React.Children.map(children, child => ({ opacity, translateX }) => {
          if (opacity === 0 && translateX === 40) return null;

          const childStyle = idx(child, _ => _.child.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `translateX(${translateX}px)`
          };

          return React.cloneElement(child, { ...child.props, style });
        })}
      </Trail>
    );
  }
}
