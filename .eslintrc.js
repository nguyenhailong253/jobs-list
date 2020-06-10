module.exports = {
  extends: ['react-app', 'airbnb'],
  parser: 'babel-eslint',
  plugins: [
    'jest',
    'sort-imports-es6-autofix',
  ],
  rules: {
    'react/jsx-filename-extension': [
        1,
        {
            'extensions': [
            '.js',
            '.jsx'
            ]
        }
    ],
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': 2,
    'import/order': [
        'error',
        {
            groups: [['builtin', 'external', 'internal']],
            'newlines-between': 'always',
        }
    ],
    'arrow-parens': 'off',
    'no-return-assign': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off'
  }
};
