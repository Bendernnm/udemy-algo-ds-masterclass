export function mergeSort() {

}

export function merge<T>(arr1: T[], arr2: T[], comparator: (a: T, b: T) => number): T[] {
  const arr: T[] = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (comparator(arr1[arr1Pointer], arr2[arr2Pointer]) <= 0) {
      arr.push(arr1[arr1Pointer]);
      arr1Pointer += 1;
    } else {
      arr.push(arr2[arr2Pointer]);
      arr2Pointer += 1;
    }
  }

  let [lastArr, i] = arr1Pointer < arr1.length
    ? [arr1, arr1Pointer] : [arr2, arr2Pointer];

  for (let length = lastArr.length; i < length; i += 1) {
    arr.push(lastArr[i]);
  }

  return arr;
}
