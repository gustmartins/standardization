# Standardization Utilities
Linting and development standardization to be used in all of my repos :zap:

## What?

This repo aggregates many of the standards I use when developing our software, including:

  * Editor configuration
  * Commit message linting

## Why?

As a developer, I must value consistency and automated enforcement of standards. This
makes it much easier for me to work on a team and to be able to write code that looks and
feels like the rest of a codebase. It is also important when I'm maintaining many dozens
of repos.

## Usage

### EditorConfig

[EditorConfig](https://editorconfig.org/) provides a default set of editor configuration
values to use in my projects.

Symlink the .editorconfig file to the root of your project and use the appropriate
extension for your editor:

`ln -s ./node_modules/@gustmartins/standardization/.editorconfig`

### Commitlint

  * Add a file called `commitlint.config.js` to your project root with the following
  content:

  ```javascript
  'use strict';

  module.exports = {
    extends: [ '@gustmartins/standardization/commitlint.js' ],
  };
  ```

  * Use `git log --oneline` to find the short hash of the previous commit and take note of
  it
  * Add the following NPM script to `package.json`:
    `"commitlint": "commitlint --from deadbeef"` (where deadbeef is the short hash from
    the previous step)

  * Add or increment the following NPM script on `package.json`:
    `"pretest": "npm run commitlint"`

## License

This software is released under the MIT license. See [the license file](LICENSE) for more
details.
