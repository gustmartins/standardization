# Standardization Utilities
Linting and development standardization to be used in all of my repos :zap:

## What?

This repo aggregates many of the standards I use when developing our software, including:

  * Editor configuration

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

## License

This software is released under the MIT license. See [the license file](LICENSE) for more
details.
