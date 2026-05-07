
let array = [4, 3, 7, 5, 1, 9, 5, 2];

let mergeSort = (array) => {
    if (array.length <= 1) { return array; }
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right);
}

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
    return result.concat(left.splice(i)).concat(right.splice(j));
}

console.log(mergeSort(array))