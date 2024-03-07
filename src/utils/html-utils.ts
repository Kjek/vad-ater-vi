type EntityMap = Record<string, string>;

export const decodeHtmlEntity = (text: string) => {
  const entityMap: EntityMap = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    quot: '"',
    nbsp: ' ',
    '#160': ' ',
  };
  return text.replaceAll(/&(\#?\w+);/gi, (match, entity: string) => {
    return entityMap[entity] ?? match;
  });
};
