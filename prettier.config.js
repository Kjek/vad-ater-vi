/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  semi: true,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  singleQuote: true,
};

export default config;
