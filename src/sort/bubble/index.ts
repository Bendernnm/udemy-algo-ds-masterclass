import { bubbleSort } from './bubble';

const numberComparator = (a: number, b: number): number => a - b;

console.log(bubbleSort([4, 20, 12, 10, 7, 9], numberComparator)); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([0, -10, 7, 4], numberComparator)); // [-10, 0, 4, 7]
console.log(bubbleSort([1, 2, 3], numberComparator)); // [1, 2, 3]
console.log(bubbleSort([], numberComparator));

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(bubbleSort(nums, numberComparator)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a: string, b: string): -1 | 0 | 1 {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(bubbleSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

interface KittyData {
  name: string;
  age: number;
}

const moarKittyData: KittyData[] = [
  {
    name: 'LilBub',
    age: 7
  }, {
    name: 'Garfield',
    age: 40
  }, {
    name: 'Heathcliff',
    age: 45
  }, {
    name: 'Blue',
    age: 1
  }, {
    name: 'Grumpy',
    age: 6
  }
];

function oldestToYoungest(a: KittyData, b: KittyData): number {
  return b.age - a.age;
}

console.log(bubbleSort(moarKittyData, oldestToYoungest));