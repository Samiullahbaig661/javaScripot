function sortNumbers(arr) {
    // Use the Array.prototype.sort method with a compare function
    return arr.slice().sort((a, b) => a - b);
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers); // [1, 2, 3, 5, 8]
