// generate Random Array with distinct elements, neededSize = size of the array 
function generateRandomArray(neededSize, range) {
    const randomDistArray = [];
    while (randomDistArray.length < neededSize) {
        const r = Math.floor(Math.random() * range);
        if (randomDistArray.indexOf(r) === -1) {
            randomDistArray.push(r);
        }
    }
    return randomDistArray;
}