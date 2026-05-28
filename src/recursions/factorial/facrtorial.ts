export function facrtorial(n: number) {
  if (n === 2) {
    return 2;
  }

  return n * facrtorial(n - 1);
}
