type ArrayType = Array<number>;
type SetType = Set<number>;
export const compareResults = (arr1: ArrayType, set: SetType) => {
  let arr2 = [...set];
  if (arr1.length !== arr2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj2[key] !== obj1[key]) return false;
  }
  console.log(obj1);
  console.log(obj2);
};
