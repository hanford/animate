import * as React from 'react'
import styled from 'react-emotion'
import { withRouter } from 'react-router'

import { Button, Container, Pre as BasePre } from '@components/ui'
import pattern from '@images/dark-pattern2.png'

const Wrapper = styled('div')`
  color: ${p => p.theme.colors.dark};
  text-align: center;
  font-family: QuickSand;

  ${Container.toString()} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    ${p =>
      p.theme.mq({
        padding: ['50px 10px', '50px 20px', '50px 20px', '100px 0'],
      })};
  }
`

const Title = styled('h2')`
  font-size: 32px;
  font-weight: 600;
`

const Text = styled('p')`
  font-size: 20px;
`

const Pre = styled(BasePre)`
  width: 100%;
  max-width: 650px;
  margin: 10px 0 20px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${p =>
    p.theme.mq({
      minWidth: ['100%', '100%', '650px', '650px'],
    })};
`

const mdxExample = `
import * as React from 'react'
import Bounce from '@react-animations/bounce'

..

 render () {
   return (
     <Bounce>
      <Text>I'm animated</Text>
    </Bounce>
   )
 }
`

export const HowTo = withRouter(({ history }) => (
  <Wrapper>
    <Container>
      <Title>How to</Title>
      <Text>Install any animation as a dependency</Text>
      <Pre className="language-bash">$ yarn add @react-animations/bounce</Pre>
      <Pre className="language-javascript">{mdxExample}</Pre>
      <Text>That's it!</Text>
    </Container>
  </Wrapper>
))
