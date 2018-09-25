import * as React from "react";
import { Trail } from "react-spring";
import idx from "idx";

export default class StaggeredReveal extends React.Component {
  static defaultProps = {
    reveal: true,
    from: -40
  };

  render() {
    const { reveal, children, from, ...props } = this.props;

    return (
      <Trail
        {...props}
        from={{
          opacity: 0,
          translateY: from
        }}
        to={{
          opacity: reveal ? 1 : 0,
          translateY: reveal ? 0 : from
        }}
        keys={React.Children.map(children, (child, index) => index)}
      >
        {React.Children.map(
          children,
          child => ({ opacity, scale, translateY }) => {
            if (opacity === 0 && translateY === from) return null;

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
