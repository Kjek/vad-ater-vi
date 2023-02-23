/* eslint-disable @typescript-eslint/ban-ts-comment */
module.exports = {
  // check for spelling mistakes
  // @ts-ignore
  //'*.md|src/**/*': (filenames) => `cspell ${filenames.join(' ')}`,

  // ensure typescript files compiles according to config
  '**/*.ts': () => 'tsc --noEmit',

  // lint and format script files
  // @ts-ignore
  '**/*.(ts|js)': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // format anything else that can be formated
  // @ts-ignore
  '**/!(*.ts|*.js)': (filenames) =>
    `prettier --write --ignore-unknown ${filenames.join(' ')}`,
};
