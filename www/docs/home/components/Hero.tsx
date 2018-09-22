import * as React from 'react'
import Helmet from 'react-helmet'
import styled, { keyframes } from 'react-emotion'
import GitHubButton from 'react-github-button'
import { withRouter } from 'react-router'

import { StaggeredUp } from '../../../../packages/staggered'
import { Button as Btn, Container } from '@components/ui'
// import pattern from '@images/pattern-bck.png'

// background: url(${pattern});
const Wrapper = styled('div')`
  width: 100%;
  background-position: center;
  border-bottom: 1px solid ${p => p.theme.colors.grayLight};
  font-family: QuickSand;

  ${Container.toString()} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 100px);
    padding-top: 0;
    padding-bottom: 0;
  }
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
  text-align: center;
`

const Buttons = styled('div')`
  display: flex;
  margin-top: 40px;
`

const Button = styled(Btn)`
  width: 160px;
  text-align: center;
  align-items: center;
  justify-content: center;
`
// color: #f35626;
// border: 2px solid #f35626;

// const hueRotate = keyframes`
//   from {
//     filter: hue-rotate(0deg);
//   }
//   to {
//     filter: hue-rotate(-360deg);
//   }
// `

// color: red;
// background-image: linear-gradient(92deg,#f35626,#feab3a);
// -webkit-background-clip: text;
const Hue = styled('div')`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
// animation: ${hueRotate} 60s linear infinite;

export const Hero = withRouter(({ history }) => (
  <Wrapper>
    <Container>
      <Hue>
        <StaggeredUp>
          <Title>react-animations</Title>
          <Subtitle>It's never been easier to animate react!</Subtitle>

          <Buttons>
            <Button scale="big" onClick={() => history.push('/documentation')}>
              Documentation
            </Button>

            <Button scale="big" onClick={() => history.push('/documentation')}>
              Github
            </Button>
          </Buttons>
        </StaggeredUp>
      </Hue>
    </Container>
  </Wrapper>
))
