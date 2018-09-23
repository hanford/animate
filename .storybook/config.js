Object.values = obj => Object.keys(obj).map(key => obj[key]);

import "./styles.css";
import React from "react";
import path from "path";
import { configure } from "@storybook/react";
import { getStorybook, storiesOf, addDecorator } from "@storybook/react";

let getPackageName = filePath =>
  path
    .dirname(filePath)
    .split(path.sep)
    .reverse()[1];

configure(() => {
  const req = require.context(
    "../packages",
    true,
    /^((?!node_modules).)*\.example\.js$/
  );

  req.keys().forEach(pathToExample => {
    const { name, Example } = req(pathToExample);

    storiesOf(getPackageName(pathToExample), module).add(name, () => {
      return <Example />;
    });
  });
}, module);

export { getStorybook };
