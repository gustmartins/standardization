'use strict';

var TYPES;

TYPES = [
  'build',
  'chore',
  'ci',
  'config',
  'docs',
  'feat',
  'fix',
  'refactor',
  'revert',
  'style',
  'sub', // commits that support a larger feature, fix, etc.
  'test',
];

module.exports = {
  rules: {
    'header-max-length': [ 2, 'always', 70 ],
    'type-empty': [ 2, 'never' ],
    'type-case': [ 2, 'always', 'lower-case' ],
    'type-enum': [ 2, 'always', TYPES ],
    'scope-case': [ 2, 'always', [ 'lower-case', 'kebab-case' ] ],
    'subject-empty': [ 2, 'never' ],
    'subject-case': [ 2, 'never', [ 'upper-case' ] ],
    'subject-full-stop': [ 2, 'never', '.' ],
    'body-leading-blank': [ 2, 'always' ],
    'body-max-line-length': [ 2, 'always', 90 ],
    'footer-leading-blank': [ 2, 'always' ],
    'footer-max-line-length': [ 2, 'always', 90 ],
  },
};
