let array = [1, 4, 5, 6, 2, 3, 9, 3, 10, 15, 8];

let mergeSort = (array) => {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
}

let merge = (left, right) => {
    let result = [];
    let i = 0;
    let j = 0;
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

console.log(mergeSort(array));