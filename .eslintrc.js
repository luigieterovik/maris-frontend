module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  globals: {
    document: true,
    window: true,
    navigator: true,
    localStorage: true
  },
  rules: {
    semi: ['off', 'never'],
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'off',
    'react/prop-types': 'off'
  }
}
