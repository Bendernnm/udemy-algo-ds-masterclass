export function factorial(n: number) {
  if (n === 2) {
    return 2;
  }

  return n * factorial(n - 1);
}

export function factorialLoop(num: number) {
  let total = 2;

  for (let i = num; i > 2; i -= 1) {
    total *= i
  }

  return total;
}
