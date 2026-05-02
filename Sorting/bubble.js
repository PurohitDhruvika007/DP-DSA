let array = [1, 4, 5, 6, 2, 3, 9, 3, 10, 15, 8];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
}

console.log(array);