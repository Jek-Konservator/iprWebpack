module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier', 'json-format', 'html'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 6,
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'json/sort-package-json': 'standard',
    'json/package-json-sort-order': ['license', 'dependencies'],
    'json/ignore-files': ['**/package-lock.json'],
    'json/json-with-comments-files': ['./tsconfig.json'],
  },

  rules: {
    'import/no-extraneous-dependencies': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'linebreak-style': 'off',

    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,

    'max-len': ['error', 500, 2, { ignoreUrls: true }],
    'no-console': 'error',
    'no-alert': 'error',

    'no-param-reassign': 'off',
    radix: 'off',

    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',

    'react/no-find-dom-node': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],

    'prettier/prettier': ['error'],
  },
};
