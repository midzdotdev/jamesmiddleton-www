module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'parser': 'vue-eslint-parser',
  'extends': [
    'standard',
    '@vue/eslint-config-standard'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
    'ecmaVersion': 2018
  },
  'rules': {
  }
}
