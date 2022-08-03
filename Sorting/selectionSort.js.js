
// Here's how it works:

// Find the smallest element in the array and swap it with the first element.
// Find the second smallest element and swap with with the second element in the array.
// Find the third smallest element and swap wit with the third element in the array.
// Repeat the process of finding the next smallest element and swapping it into the correct position until the entire array is sorted.
// But, how would you write the code for finding the index of the second smallest value in an array?

// An easy way is to notice that the smallest value has already been swapped into index 0,
// so the problem reduces to finding the smallest element in the array starting at index 1.


function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min_index = i;
        let min_item = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < min_item) {
                min_index = j;
                min_item = arr[j];
            }
        }        
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]]; // swapping
    }
    return arr;
}


// Properties
// Space Complexity:  O(n)
// Time Complexity:  O(n*n)
// Sorting in Place:  Yes
// Stable:  No


const arrayData = generateRandomArray(100000, 110000);
console.log('unsorted array ', arrayData);
const t1 = performance.now();
console.log('sorted array ' , selectionSort(arrayData));
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
