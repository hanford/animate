import * as React from "react";
import { Spring, config } from "react-spring";
import idx from "idx";

class ZoomIn extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children } = this.props;

    return (
      <Spring
        from={{
          opacity: 0,
          scale: 0
        }}
        to={{
          opacity: reveal ? 1 : 0,
          scale: reveal ? 1 : 0
        }}
        config={config.gentle}
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

export default ZoomIn;
