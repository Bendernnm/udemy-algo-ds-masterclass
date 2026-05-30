export function bubbleSort<T>(arr: T[], comparator: (a: T, b: T) => number): T[] {
  const length = arr.length;

  if (!length) {
    return [];
  }

  let changed: boolean;

  for (let i = 0; i < length; i += 1) {
    changed = false;

    for (let j = 0; j < length - i - 1; j += 1) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        const tmp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        changed = true;
      }
    }

    if (!changed) {
      return arr;
    }
  }

  return arr;
}