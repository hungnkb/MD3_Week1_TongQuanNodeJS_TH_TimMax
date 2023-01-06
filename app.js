const findMax = (arr) => {
    let max = 0;
    for (let i of arr) {
        if (i > max) {
            max = i;
        }
    } return max;
}

const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];

console.log('Max = ' + findMax(array))