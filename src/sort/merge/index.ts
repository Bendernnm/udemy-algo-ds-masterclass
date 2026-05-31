import { merge, mergeSort } from './merge';

const numberComparator = (a: number, b: number): number => a - b;

function mergeArrays() {
  const arr1 = [1, 3, 4, 5];
  const arr2 = [2, 4, 6, 8];

  console.log(merge(arr1, arr2, numberComparator)); // [1,2,3,4,4,5,6,8]

  const arr3 = [-2, -1, 0, 4, 5, 6];
  const arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

  console.log(merge(arr3, arr4, numberComparator)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

  const arr5 = [3, 4, 5];
  const arr6 = [1, 2];

  console.log(merge(arr5, arr6, numberComparator)); // [1,2,3,4,5]

  const names = ['Bob', 'Ethel', 'Christine'];
  const otherNames = ['M', 'Colt', 'Allison', 'SuperLongNameOMG'];

  function stringLengthComparator(str1: string, str2: string) {
    return str1.length - str2.length;
  }

  console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]

  console.log(merge([], [], numberComparator));
  console.log(merge([1], [], numberComparator));
  console.log(merge([], [1], numberComparator));
  console.log(merge([1], [1], numberComparator));
  console.log(merge([1, 1], [1, 1], numberComparator));
  console.log(merge([1, 3, 5], [2, 4, 6], numberComparator));
}

console.log(mergeSort([4, 20, 12, 10, 7, 9], numberComparator)); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4], numberComparator)); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3], numberComparator)); // [1, 2, 3]
console.log(mergeSort([], numberComparator));

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(mergeSort(nums, numberComparator)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

const moarKittyData = [
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

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order

mergeArrays();
