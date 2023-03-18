interface EntityMap {
  [key: string]: string;
}

export const decodeHtmlEntity = (text: string) => {
  const entityMap: EntityMap = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    quot: '"',
    nbsp: ' ',
  };
  return text.replace(/&([a-z]+);/gi, (match, entity: string) => {
    return entityMap[entity] || match;
  });
};
