import * as React from "react";
import { Trail, config } from "react-spring";
import idx from "idx";

export default class StaggeredReveal extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children, ...props } = this.props;

    return (
      <Trail
        {...props}
        from={{
          opacity: 0,
          translateY: -40
        }}
        to={{
          opacity: reveal ? 1 : 0,
          translateY: reveal ? 0 : -40
        }}
        keys={React.Children.map(children, (child, index) => index)}
        config={config.wobbly}
      >
        {React.Children.map(
          children,
          child => ({ opacity, scale, translateY }) => {
            if (opacity === 0 && translateY === -40) return null;

            const childStyle = idx(child, _ => _.child.props.style) || {};
            const style = {
              ...childStyle,
              opacity,
              transform: `translateY(${translateY}px)`
            };

            return React.cloneElement(child, { ...child.props, style });
          }
        )}
      </Trail>
    );
  }
}
