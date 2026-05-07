
let array = [4, 3, 7, 5, 1, 9, 5, 2];

let quick = (array) => {
    if (array.length <= 1) return array;
    let left = [];
    let right = [];
    let pivot = array[array.length - 1];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return [...quick(left), pivot, ...quick(right)];
}

console.log(quick(array));