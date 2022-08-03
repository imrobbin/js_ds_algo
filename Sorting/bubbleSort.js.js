
// Here's how it works:

// Starting with [4, 2, 6, 3, 9], the algorithm compares the first two elements in the array, 4 and 2.
// It swaps them because 2 < 4: [2, 4, 6, 3, 9]
// It compares the next two values, 4 and 6. As 4 < 6, these are already in order, and the algorithm moves on.
// The next two values are also swapped because 3 < 6: [2, 4, 3, 6, 9]
// The last two values, 6 and 9, are already in order, so the algorithm does not swap them. And continue


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if(arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swapping                
            }
        }
    }
    return arr;
}


// Properties
// Space complexity: O(1)
// Best case performance: O(n)
// Average case performance: O(n*n)
// Worst case performance: O(n*n)
// Stable: Yes


const arrayData = generateRandomArray(10, 14);
console.log('unsorted array ', arrayData);
const t1 = performance.now();
console.log('sorted array bubbleSort ' , bubbleSort(arrayData));
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
