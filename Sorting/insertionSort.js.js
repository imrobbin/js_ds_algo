
// Here's how it works:

// 1. Pick a key (generally 2nd element at index 1)
// 2. compare key with previous element (key-1)
// 3. while previous element is greater than key, assign the key to previous element
// 4. at last swap the key to the previous element


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        // Compare key with each element on the left of it until an element smaller than it is found
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}


// Properties:
// Space Complexity: O(1)
// Time Complexity: O(n), O(n*n), O(n*n) for Best, Average, Worst cases respectively.
// Best Case: array is already sorted
// Average Case: array is randomly sorted
// Worst Case: array is reversely sorted.
// Sorting In Place: Yes
// Stable: Yes

const arrayData = generateRandomArray(10, 150);
console.log('unsorted array ', arrayData);
const t1 = performance.now();
console.log('sorted array ' , insertionSort(arrayData));
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
