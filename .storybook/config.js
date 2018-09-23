Object.values = obj => Object.keys(obj).map(key => obj[key]);

import "./styles.css";
import React from "react";
import path from "path";
import { configure } from "@storybook/react";
import { getStorybook, storiesOf, addDecorator } from "@storybook/react";
// import { withOptions } from '@storybook/addon-options';

let getPackageName = filePath =>
  path
    .dirname(filePath)
    .split(path.sep)
    .reverse()[1];

configure(() => {
  // Story book is SUPER SLOW so I tend to do just one example at a time.
  // const {
  //   name,
  //   Example
  // } = require("../packages/dialog/examples/nested.example.js");
  // storiesOf("Dialog", module).add(name, () => <Example />);

  // Automatically import all examples
  // addDecorator(
  //   withOptions({
  //     name: 'React Animations',
  //     showStoriesPanel: true,
  //     showAddonPanel: true,
  //     showSearchBox: false,
  //     addonPanelInRight: true,
  //     sortStoriesByKind: false,
  //     hierarchySeparator: null,
  //     hierarchyRootSeparator: null,
  //     sidebarAnimations: true,
  //     selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  //     enableShortcuts: false, // true by default
  //   })
  // )

  const req = require.context(
    "../packages",
    true,
    /^((?!node_modules).)*\.example\.js$/
  );

  req.keys().forEach(pathToExample => {
    const { name, Example } = req(pathToExample);
    storiesOf(getPackageName(pathToExample), module).add(name, () => {
      // console.log(propTypes);

      // let props = {};

      // if (propTypes && propTypes.direction) {
      //   const label = "Direction";
      //   const options = propTypes && propTypes.direction;
      //   const defaultValue = "left";
      //   const direction = select(label, options, defaultValue);
      //   props.direction = direction;
      // }

      return <Example />;
    });
  });
}, module);

export { getStorybook };
