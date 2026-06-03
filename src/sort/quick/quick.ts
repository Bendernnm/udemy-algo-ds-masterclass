export function quickSort<T>(arr: T[], comparator: (a: T, b: T) => number, start = 0, end = arr.length - 1): T[] {
  if (start < end) {
    const pivotIndex = pivot(arr, comparator, start, end);

    quickSort(arr, comparator, start, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, end);
  }

  return arr;
}

export function pivot<T>(arr: T[], comparator: (a: T, b: T) => number, start = 0, end = arr.length - 1): number {
  const pivotValue: T = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i += 1) {
    if (comparator(arr[i], pivotValue) < 0) {
      pivotIndex += 1;

      const tmp: T = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = tmp;
    }
  }

  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = pivotValue;

  return pivotIndex;
}