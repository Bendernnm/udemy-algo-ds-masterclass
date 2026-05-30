export function binarySearch<T>(array: T[], item: T): number {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((end + start) / 2);
    const middleItem = array[middle];

    if (middleItem === item) {
      return middle;
    }

    if (middleItem < item) {
      if (array[middle + 1] === item) {
        return middle + 1;
      }

      start = middle + 1;
      continue;
    }

    if (array[middle - 1] === item) {
      return middle - 1;
    }

    end = middle - 1;
  }

  return -1;
}