let array = [1, 4, 5, 6, 2, 3, 9, 3, 10, 15, 8];
let search = 20;

let linear = (array, search) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === search) {
            return i;
        }
    }
    return -1;
}
let ans = linear(array, search);
console.log(ans);