function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

console.log(range(1, 5)); // Output: [1, 2, 3, 4, 5]
