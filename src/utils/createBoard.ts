export const generateGrid = (max: number) => {
  let array: Array<number> = [];
  for (let i = 1; i <= max; i++) {
    array.push(i);
  }
  return array;
};
