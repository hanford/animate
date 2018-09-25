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

const Anchor = styled('a')`
  background-color: #e6ebf1;
  background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
  background-position: -0.5em;
  border: 1px solid rgba(27, 31, 35, 0.35);
  border-radius: 2px;
  padding: 8px 24px;
  color: black;
  text-decoration: none;
  font-weight: 900;
  width: 120px;
  text-align: center;
`

export const Hero = withRouter(({ history }) => (
  <Wrapper>
    <StaggeredUp>
      <Title>react-animations</Title>
      <Subtitle>It's never been easier to animate react!</Subtitle>

      <Buttons>
        <Anchor
          target="_blank"
          href="https://github.com/hanford/react-animations"
        >
          Github
        </Anchor>
      </Buttons>
    </StaggeredUp>
  </Wrapper>
))
