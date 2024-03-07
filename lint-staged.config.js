/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const config = {
  // check for spelling mistakes
  // @ts-ignore
  //'*.md|src/**/*': (filenames) => `cspell ${filenames.join(' ')}`,

  // ensure typescript files compiles according to config
  '**/*.(ts|tsx)': () => 'tsc --noEmit',

  // lint and format script files
  // @ts-ignore
  '**/*.(ts|js|tsx)': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // format anything else that can be formated
  // @ts-ignore
  '**/!(*.ts|*.js|*.tsx)': (filenames) =>
    `prettier --write --ignore-unknown ${filenames.join(' ')}`,

  // Prettify only Markdown and JSON files
  // @ts-ignore
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
};

export default config;
