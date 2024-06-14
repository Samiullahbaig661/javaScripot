function fibonacci(n) {
    // Handle base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Initialize the first two numbers in the Fibonacci sequence
    let a = 0, b = 1, next;

    // Compute the n-th Fibonacci number
    for (let i = 2; i <= n; i++) {
        next = a + b;
        a = b;
        b = next;
    }

    return b;
}

// Example usage:
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
