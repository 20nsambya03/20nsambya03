function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

let debouncedFunction = debounce(() => console.log("Debounced!"), 500);
debouncedFunction(); // Invoke the function
