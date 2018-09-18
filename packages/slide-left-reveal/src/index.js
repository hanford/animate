// @flow

import * as React from 'react';
import { Spring, config } from 'react-spring';
import idx from 'idx';

type Props = {
  reveal: boolean,
  children: React.Element,
};

export default class SlideLeftReveal extends React.Component<Props> {
  static defaultProps = {
    reveal: true,
  };

  render() {
    const { reveal, children } = this.props;

    return (
      <Spring
        from={{
          opacity: 0,
          translateX: -30,
        }}
        to={{
          opacity: reveal ? 1 : 0,
          translateX: reveal ? 0 : -30,
        }}
        config={config.wobbly}
      >
        {({ opacity, translateX }) => {
          if (opacity === 0) return null;

          const childStyle = idx(children, _ => _.props.style) || {};
          const style = {
            ...childStyle,
            opacity,
            transform: `translateX(${translateX}px)`,
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
