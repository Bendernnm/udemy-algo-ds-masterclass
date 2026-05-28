export function recursiveRange(n: number): number {
  if(n === 1) {
    return 1;
  }
  return n + recursiveRange(n - 1);
}