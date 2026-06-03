import { pivot, quickSort } from './quick';

const numberComparator = (a: number, b: number): number => a - b;

function runPivot() {
  const arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
  const arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
  const arr3 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

  function strLength(a: string, b: string): number {
    return a.length - b.length;
  }

  console.log(pivot(arr1, numberComparator)); // 3
  console.log(pivot(arr2, numberComparator)); // 4
  console.log(pivot(arr3, strLength)); // 1
}

runPivot();

console.log(quickSort([4, 20, 12, 10, 7, 9], numberComparator)); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4], numberComparator)); // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3], numberComparator)); // [1, 2, 3]
console.log(quickSort([], numberComparator));

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums, numberComparator)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}

console.log(quickSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

const moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(quickSort(moarKittyData, oldestToYoungest));