function rangeNumbers(a, b) {
    if (a === b) {
        console.log(a);
    } else if (a < b) {
        console.log(a);
        a += 1;
        rangeNumbers(a, b);
    } else {
        console.log(a);
        a -= 1;
        rangeNumbers(a, b);
    } 
};
rangeNumbers(1, 13);












