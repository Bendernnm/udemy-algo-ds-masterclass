import { merge } from './merge';

const numberComparator = (a: number, b: number): number => a - b;

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