export function selectionSort<T>(arr: T[], comparator: (a: T, b: T) => number): T[] {
  const length = arr.length;

  for (let i = 0; i < length; i += 1) {
    let swapItemIndex = i;

    for (let j = i + 1; j < length; j += 1) {
      if (comparator(arr[swapItemIndex], arr[j]) > 0) {
        swapItemIndex = j;
      }
    }

    if (swapItemIndex !== i) {
      const tmp = arr[i];

      arr[i] = arr[swapItemIndex];
      arr[swapItemIndex] = tmp;
    }
  }

  return arr;
}
