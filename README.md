# Welcome to react-animations ✨

Thanks for getting involved with react-animations development!

🚧 The project is totally new, expect change 🚧

[Documentation Preview](https://react-animations.jackhanford.com)
<br />
[Storybook Preview](https://storybook-static-whtqwhvtsy.now.sh/)

## Getting Started

This project uses

- [Lerna](https://lernajs.io/) to manage multiple libs
- [Storybook](https://storybook.js.org/) for a great development experience
- [docz](https://docz.site) for documentation
- [Jest](https://jestjs.io/) for painless testing.

Before doing anything else, run these commands:

```
git clone git@github.com:hanford/react-animations.git
cd react-animations
yarn install
yarn bootstrap
yarn build
```

## Root Repo Scripts:

```sh
yarn bootstrap    # bootstraps lerna so all dependencies get
                  # linked for cross-component development

yarn start        # starts storybook server

yarn test         # runs tests in all packages

yarn build        # builds all packages

yarn release      # publishes changed packages
```

## Running / Writing Examples

First do the steps in "Getting started", then start the Storybook server:

```
yarn start
```

Next, put a file in `packages/<component-dir>/examples/<name>.example.js` and make it look like this:

```jsx
import React from "react";

// The name of the example, you must export it as `name`
export let name = "Basic";

// The example to render, you must name it `Example`
export let Example = () => <div>Cool cool cool</div>;
```

Now you can edit the files in `packages/*` and storybook will automatically reload your changes.

**Note**: If you change an internal dependency you will need to run `yarn build` again. For example, if working on `MenuButton` requires a change to `Rect` (an internal dependency of `MenuButton`), you will need to run `yarn build` for the changes to `Rect` to show up in your `MenuButton` example.

## Running / Writing Tests

First do the steps in "Getting Started", then:

```
yarn test
```

Or if you want to run the tests as you edit files:

```
yarn test --watch
```

Often you'll want to just test the component you're working on:

```
cd packages/<component-path>
yarn test --watch
```

Questions? Feedback? [Please let me know](https://github.com/hanford/react-animations/issues/new)

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright © 2017-present [Jack Hanford](http://jackhanford.com), jackhanford@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
