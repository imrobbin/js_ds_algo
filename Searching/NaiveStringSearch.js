// naive string search
// Write a function which accepts a string and a pattern,
// and counts the number of times the pattern appears in the string.

// Time Complexity - O(n)

class NaiveStringSearch {
    constructor() {}

    naiveStringSearch(inputStr, pattern) {
        let counter = 0;
        let inpCounter = 0;
        let patternCounter = 0;
        for (let i = 0; i < inputStr.length; i++) {
            inputStr[i] === pattern[patternCounter] ? patternCounter++ : (patternCounter = 0);
            if (patternCounter === pattern.length) counter++;
        }
        return counter;
    }
}

let naive = new NaiveStringSearch();
console.log(naive.naiveStringSearch('woworaviomgraviasdaravisravi', 'ravi'));
console.log(naive.naiveStringSearch('lorie loled', 'lol'));
