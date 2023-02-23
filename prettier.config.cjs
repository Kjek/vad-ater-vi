/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  semi: true,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  singleQuote: true,
};
