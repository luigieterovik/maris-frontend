module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  globals: {
    document: true,
    window: true,
    navigator: true
  },
  rules: {
    semi: ['off', 'never'],
    'no-undef': 'warn',
    'no-unused-vars': 'warn'
  }
}
