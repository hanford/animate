import * as React from 'react'
import styled from 'react-emotion'
import { withRouter } from 'react-router'

import { StaggeredUp } from '../../../packages/staggered'

const Wrapper = styled('div')`
  width: 100%;
  background-position: center;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  height: calc(100vh);
  padding-top: 0;
  padding-bottom: 0;
`

const Title = styled('h1')`
  margin-bottom: 1.5rem;
  font-size: 48px;
  font-weight: 100;
  line-height: 1;
  letter-spacing: -0.05em;
`

const Subtitle = styled('h2')`
  font-weight: 200;
`

const Buttons = styled('div')`
  margin-top: 40px;
`

export const Hero = withRouter(({ history }) => (
  <Wrapper>
    <StaggeredUp>
      <Title>react-animations</Title>
      <Subtitle>It's never been easier to animate react!</Subtitle>

      <Buttons>
        <button onClick={() => history.push('/documentation')}>Github</button>
      </Buttons>
    </StaggeredUp>
  </Wrapper>
))
