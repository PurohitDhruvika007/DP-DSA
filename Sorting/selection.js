let array = [1, 4, 5, 6, 2, 3, 9, 3, 10, 15, 8];

for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
        let min = i
        if (array[min] > array[j]) {
            [array[min], array[j]] = [array[j], array[min]];
        }
    }
}

console.log(array);