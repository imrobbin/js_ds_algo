// Binary Search
// Write a function called binarySearch which accepts a sorted array and
// a value and returns the index at which the value exists. Otherwise, return -1.

// Time Complexity - O(log n)

class BinarySearch {
    constructor() {}
    binarySearch(arr, element) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === element) return mid;

            element < arr[mid] ? (right = mid - 1) : (left = mid + 1);
        }

        return -1;
    }
}

let binary = new BinarySearch();

console.log(binary.binarySearch([16, 40, 70, 78, 89, 90, 101, 102, 114, 124, 125, 141, 153, 154, 158], 40)); // 1
console.log(binary.binarySearch([26, 34, 59, 60, 64, 69, 73, 89, 94, 107, 119, 124, 143, 147, 149, 164], 107)); // 9
console.log(binary.binarySearch([164, 172, 187, 191, 196, 203, 211, 225, 235, 243, 257, 264, 268, 288], 40)); // -1
