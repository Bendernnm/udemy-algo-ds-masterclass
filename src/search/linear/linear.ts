export function linearSearch<T>(arr: T[], item: T): number {
  for (let i = 0, length = arr.length; i < length; i += 1) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}
