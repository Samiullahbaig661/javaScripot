function countCharacters(str) {
    // Initialize an empty object to store character counts
    const charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        // Otherwise, set its count to 1
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    // Return the object with character counts
    return charCount;
}

// Example usage:
const result = countCharacters("hello world");
console.log(result); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
