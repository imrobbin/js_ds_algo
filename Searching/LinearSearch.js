// Linear Search
// Write a function called linearSearch which accepts an array and a value,
// and returns the index at which the value exists.
// If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function!

// Time Complexity - O(n)

class LinearSearch {
    constructor() {}
    linearSearch(arr, element) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) return i;
        }
        return -1;
    }
}

let linear = new LinearSearch();

console.log(linear.linearSearch([53, 42, 12, 14, 20, 7, 43, 52, 46, 0], 7)); // 5
console.log(linear.linearSearch([53, 42, 12, 14, 20, 7, 43, 52, 46, 0], 23)); // -1
console.log(linear.linearSearch([53, 42, 12, 14, 20, 7, 43, 52, 46, 0], 20)); // 4
console.log(linear.linearSearch([53, 42, 12, 14, 20, 7, 43, 52, 46, 0], -1)); // -1
