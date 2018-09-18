// @flow

import * as React from 'react';
import { Spring, config } from 'react-spring';
import idx from 'idx';

type Props = {
  reveal: boolean,
  children: React.Element,
};

export default class BouncyReveal extends React.Component<Props> {
  static defaultProps = {
    reveal: true,
  };

  render() {
    const { reveal, children } = this.props;

    return (
      <Spring
        from={{
          opacity: 0,
          scale: 0.5,
        }}
        to={{
          opacity: reveal ? 1 : 0,
          scale: reveal ? 1 : 0.5,
        }}
        config={config.wobbly}
      >
        {({ opacity, scale }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `scale(${scale})`,
          };

          return React.cloneElement(children, {
            ...children.props,
            style,
          });
        }}
      </Spring>
    );
  }
}
