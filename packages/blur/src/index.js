import * as React from "react";
import { Spring } from "react-spring";
import idx from "idx";

class Blur extends React.Component {
  static defaultProps = {
    reveal: true
  };

  render() {
    const { reveal, children, ...props } = this.props;

    return (
      <Spring
        {...props}
        from={{
          blur: 10
        }}
        to={{
          blur: reveal ? 0 : 10
        }}
      >
        {({ blur }) => {
          const childStyle = idx(children, _ => _.props.style) || {};

          const style = {
            ...childStyle,
            filter: `blur(${blur}px)`
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

export default Blur;
