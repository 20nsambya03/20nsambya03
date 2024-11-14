function maxProduct(arr) {
    let maxProduct = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            maxProduct = Math.max(maxProduct, arr[i] * arr[j]);
        }
    }
    return maxProduct;
}

let numbers = [1, 2, 3, 4, 5];
console.log(maxProduct(numbers)); // Output: 20
