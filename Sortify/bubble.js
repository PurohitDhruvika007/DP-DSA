let array = [4, 3, 7, 5, 1, 9, 5, 2];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
}
console.log(array)