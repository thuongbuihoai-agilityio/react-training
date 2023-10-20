// Flattens an array of arrays into a single array
export const flattenArray = <T>(pages: T[][]): T[] => {
  const result: T[] = [];
  pages.forEach((page) => {
    result.push(...page);
  });

  return result;
};
