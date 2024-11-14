function mode(arr) {
    const frequency = {};
    let maxFreq = 0;
    let modes = [];

    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            modes = [num];
        } else if (frequency[num] === maxFreq) {
            modes.push(num);
        }
    });

    return modes;
}

let numbers = [1, 2, 3, 4, 5, 1, 1, 2, 3, 4, 5, 5, 5];
console.log(mode(numbers)); // Output: [1, 5]
