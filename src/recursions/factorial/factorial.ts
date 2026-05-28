export function factorial(n: number) {
  if (n === 2) {
    return 2;
  }

  return n * factorial(n - 1);
}


