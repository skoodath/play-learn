type ArrayType = Array<number>;
type SetType = Set<number>;
export const compareResults = (arr1: ArrayType, set: SetType) => {
  let arr2 = [...set];
  if (arr1.length !== arr2.length) return false;
  let resultArray = Array.from(new Set(arr1.concat(arr2)));
  return arr1.length === resultArray.length;
};
