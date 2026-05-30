export function insertionSort<T>(arr: T[], comparator: (a: T, b: T) => number): T[] {
  const length = arr.length;

  for (let i = 1; i < length; i += 1) {
    let j = i - 1;
    const currentValue = arr[i];
    
    for (; j >= 0 && comparator(arr[j], currentValue) > 0; j -= 1) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}