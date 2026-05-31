export function mergeSort<T>(arr: T[], comparator: (a: T, b: T) => number): T[] {
  const middle = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, middle);
  const arr2 = arr.slice(middle);

  if (arr1.length <= 1 && arr2.length <= 1) {
    return merge(arr1, arr2, comparator);
  }

  return merge(
    mergeSort(arr1, comparator),
    mergeSort(arr2, comparator),
    comparator,
  );
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
