function isAlphabet(str) {
    return /^[A-Za-z]+$/.test(str);
}

console.log(isAlphabet("hello")); // Output: true
console.log(isAlphabet("hello123")); // Output: false
