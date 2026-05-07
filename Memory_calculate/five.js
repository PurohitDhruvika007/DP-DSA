let array1 = [1, 3, 4, 7, 8, 9];
let array2 = [1, 2, 5, 6, 7, 10];

let merge = (left, right) => {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        }
        else {
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(merge(array1, array2));