module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'rules': {
    '@typescript-eslint/camelcase': ['off', { 'properties': 'never' }],
    '@typescript-eslint/quotes': ['error', 'single'],
    'camelcase': 'off',
    'comma-dangle': 2,
    'indent': ['error', 2],
    'no-extra-semi': 2,
    'no-irregular-whitespace': 2,
    'no-lonely-if': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': 2,
    'no-trailing-spaces': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': 'off',
    'semi': ['error', 'never'],
    'max-len': 1
  }
}
