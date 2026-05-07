const rotateArray = (array, k) => {
    let n = array.length;
    k = k % n;
    const reverse = (start, end) => {
        while (start < end) {
            [array[start], array[end]] = [array[end], array[start]];
            start++;
            end--;
        }
    }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(0, n - 1);
    return array;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 3;
console.log(rotateArray(array, k));