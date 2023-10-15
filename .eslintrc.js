/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ["sznm/react", "plugin:react/jsx-runtime"],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off'
  },
};
