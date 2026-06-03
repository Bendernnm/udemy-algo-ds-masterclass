function getDigit(num: number, i: number): number {
  return Math.trunc((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num: number): number {
  if (!num) {
    return 0;
  }

  return Math.trunc(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]) {
  return Math.max(...nums.map(i => digitCount(i)), 0);
}

function radixSort(arr: number[]): number[] {
  let numbers = [...arr];
  const iterations = mostDigits(numbers);

  for (let i = 0; i < iterations; i += 1) {
    const filledBuckets: number[][] = numbers.reduce((bucket, item) => {
      const digit = getDigit(item, i);

      bucket[digit].push(item);

      return bucket;
    }, initBuckets());

    // numbers = ([] as number[]).concat(...filledBuckets);

    numbers = [];

    for (let j = 0; j < 10; j += 1) {
      numbers.push(...filledBuckets[j]);
    }
  }

  return numbers;
}

function initBuckets(): number[][] {
  const buckets: number[][] = [];

  for (let i = 0; i < 10; i += 1) {
    buckets[i] = [];
  }

  return buckets;
}