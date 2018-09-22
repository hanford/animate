import './github-button'
import { css, injectGlobal } from 'emotion'

import * as colors from './colors'

const selection = (color: string) => css`
  background: ${color};
  color: white;
`

// tslint:disable
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Quicksand');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  ::-moz-selection {
    ${selection(colors.link)}
  }

  ::selection {
    ${selection(colors.link)}
  }

  .icon-link {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.62;
    letter-spacing: -0.005em;
    background: white;
    overflow: hidden;
  }

  body {
    color: transparent;
  }

  body > *, #root {
    color: ${colors.text};
  }

  html, body, #root {
    height: 100vh;
    min-height: 100vh;
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: ${colors.link};
  }

  a:hover {
    color: ${colors.link};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: color 9999s ease-out, background-color 9999s ease-out;
    transition-delay: 9999s;
  }

  input:required,
  input:invalid {
    box-shadow: none;
  }

  button:focus {
    outline: none !important;
  }

  select {
    color: ${colors.text};
  }

  pre, code {
    font-family: 'Inconsolate', monospace;
  }
`
