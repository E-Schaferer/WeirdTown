module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    'jest': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
  },
  plugins: [
    'react',
    "react-hooks",
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
  },
};
