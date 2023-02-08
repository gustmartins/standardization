# Standardization Utilities

Linting and development standardization to be used in all of my repos :zap:

## What?

This repo aggregates many of the standards I use when developing our software, including:

  * Editor configuration
  * Commit message linting
  * Markdown linting
  * JS/TS linting

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

### Markdownlint

Add a file named `.markdownlint.json` to the root of your project with the following
content:

```json
{
  "extends": "./node_modules/@gustmartins/standardization/.markdownlint.json"
}
```

Add the following script to package.json, and adjust the ignore argument as needed to suit
the needs of the project. Then add a call to markdownlint in the `standards` NPM script.

```json
{
  "scripts": {
    "markdownlint": "markdownlint -c .markdownlint.json -i CHANGELOG.md '{,!(node_modules)/**/}*.md'",
    "standards": "npm run markdownlint && npm run eslint"
  }
}
```

### ESLint

Add a file named `.eslintrc.json` to the root of your project with the following content:

```json
{
  "extends": "./node_modules/@gustmartins/standardization/eslint/node"
}
```

When ESLint is needed for a project, add an `eslint` task to package.json, and execute it
as part of the `standards` NPM script as well:

```json
{
  "scripts": {
    "eslint": "eslint .",
    "standards": "npm run markdownlint && npm run eslint"
  }
}
```

### check-node-version

Add a `check-node-version` task to package.json, providing the desired version of Node.js
and NPM that you wish to enforce. Execute it as part of the `test` NPM script as well.

```json
{
  "scripts": {
    "check-node-version": "check-node-version --node 16.15.0 --npm 8.11.0",
    "test": "npm run check-node-version && nyc mocha -- -R spec 'tests/**/*.test.js'"
  }
}
```

`check-node-version` allows us to enforce a Node.js and NPM version for our projects. It's
possible that some processes in some projects could fail when the wrong version of Node.js
is enabled in the developer's environment. This helps eliminate one factor from the
equation when troubleshooting.

## License

This software is released under the MIT license. See [the license file](LICENSE) for more
details.
