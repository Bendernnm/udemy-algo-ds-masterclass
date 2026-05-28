export function power(base: number, exponent: number) {
  if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return base;
  }

  return base * power(base, exponent - 1)
}

export function powerWithHelper(base: number, exponent: number) {
  if (exponent === 0) {
    return 1;
  }

  function helper(base: number, exponent: number): number {
    if (exponent === 1) {
      return base;
    }

    return base * helper(base, exponent - 1);
  }

  return base * helper(base, exponent - 1);
}