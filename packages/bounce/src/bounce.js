import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class Bounce extends React.Component {
  static defaultProps = {
    reveal: true,
    delay: 0
  };

  render() {
    const { reveal, delay, children } = this.props;

    return (
      <Spring
        delay={delay}
        from={{
          opacity: 0,
          scale: 0.2
        }}
        to={{
          opacity: reveal ? 1 : 0,
          scale: reveal ? 1 : 0.2
        }}
        config={config.wobbly}
      >
        {({ opacity, scale }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `scale(${scale})`
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

export default Bounce;
