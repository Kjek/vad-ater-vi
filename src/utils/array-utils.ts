export const removeDuplicates = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

export const removeDuplicatesWithKey = <T>(arr: T[], key: keyof T): T[] => {
  const seen = new Set();
  return arr.filter((item) => {
    const value = item[key];
    return seen.has(value) ? false : seen.add(value);
  });
};
