module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-callback-return': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': [
      'error',
      { before: true, after: true },
    ],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'camelcase': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'complexity': 'error',
    'computed-property-spacing': 'error',
    'curly': [ 'error', 'multi-or-nest', 'consistent' ],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': [ 'error', 'property' ],
    'dot-notation': [
      'error',
      { allowPattern: '^[a-z]+(_[a-z]+)+$' },
    ],
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    'grouped-accessor-pairs': [ 'error', 'getBeforeSet' ],
    'guard-for-in': 'error',
    'indent': [ 'error', 2, { VariableDeclarator: 'first', SwitchCase: 1 } ],
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        overrides: {
          catch: { after: false },
        },
      },
    ],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-around-comment': 'error',
    'max-depth': [ 'error', 4 ],
    'max-len': [
      'error',
      {
        'code': 120,
        'comments': 90,
        'ignoreUrls': true,
      },
    ],
    'max-nested-callbacks': [ 'error', 5 ],
    'max-params': [ 'error', 5 ],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-console': [
      'error',
      { allow: [ 'info', 'warn' ] },
    ],
    'no-constructor-return': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': [
      'error',
      { allow: [ '!!' ] },
    ],
    'no-implicit-globals': [
      'error',
      { lexicalBindings: true },
    ],
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxBOF': 0,
        'maxEOF': 0,
      },
    ],
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-plusplus': [
      'error',
      { allowForLoopAfterthoughts: true },
    ],
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': [
      'error',
      { functions: false },
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'one-var': [
      'error',
      {
        var: 'always',
        let: 'consecutive',
        const: 'consecutive',
        separateRequires: true,
      },
    ],
    'one-var-declaration-per-line': [ 'error', 'initializations' ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [ 'var', 'let', 'const' ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'prefer-regex-literals': 'error',
    'quotes': [ 'error', 'single' ],
    'radix': 'error',
    'semi': [ 'error', 'always' ],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'space-in-parens': [ 'error', 'never' ],
    'space-unary-ops': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': [ 'error', 'always' ],
    'strict': 'error',
    'template-curly-spacing': 'error',
    'unicode-bom': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'yoda': 'error',
  },
  overrides: [
    {
      files: [ '*.ts' ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        loggerFn: false,
      },
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as' },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error', {
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            'selector': [ 'classProperty', 'classMethod' ],
            'modifiers': [ 'private', 'protected' ],
            'leadingUnderscore': 'require',
            'format': [ 'camelCase' ],
          },
          {
            'selector': [ 'class', 'interface' ],
            'format': [ 'PascalCase' ],
          },
        ],
        'new-cap': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-dupe-class-members': 'off',
        'no-empty-function': [
          'error', { allow: [ 'constructors' ] },
        ],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': [
          'error',
          { allows: [ 'private' ] },
        ],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [ 'error' ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            typedefs: false,
          },
        ],
        'no-var': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-ordering': 'error',
        'strict': [ 'error', 'never' ],
        '@typescript-eslint/type-annotation-spacing': [
          'error',
          {
            before: false,
            after: true,
            overrides: {
              arrow: { before: true, after: true },
            },
          },
        ],
      },
    },
    {
      files: [ '*.d.ts' ],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
  ],
};