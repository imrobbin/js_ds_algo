
// Here's how it works:

// Divide: In Divide, first pick a pivot element. 
// After that, partition or rearrange the array into two sub-arrays such that 
    // each element in the left sub-array is less than or equal to the pivot element and 
    // each element in the right sub-array is larger than the pivot element.

// Conquer: Recursively, sort two subarrays with Quicksort.


const quickSort = (arr, left = 0, right = arr.length - 1) => {

    // pivot index helper function
    const pivotHelper = (arr, start = 0, end = arr.length + 1) => {
        let pivot = arr[start];
        let pivotSwapIndex = start;
        for (let i = start + 1; i < arr.length; i++) {
            if(arr[i] < pivot ) {
                pivotSwapIndex++;
                [arr[pivotSwapIndex], arr[i]] = [arr[i], arr[pivotSwapIndex]];
            }
        }
        [arr[pivotSwapIndex], arr[start]] = [arr[start], arr[pivotSwapIndex]];
        return pivotSwapIndex;
    }

    // quick sort 
    if(left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);    
    }
    return arr;
}

// Time Complexity
// Best	O(n*log n)
// Worst	O(n*n)
// Average	O(n*log n)
// Space Complexity	O(log n)
// Sorting in Place:  Yes
// Stability NO


const arrayData = generateRandomArray(100000, 110000);
console.log('unsorted array ', arrayData);
const t1 = performance.now();
console.log('sorted array ' , quickSort(arrayData));
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);