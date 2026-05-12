let array = [9, 5, 2, 3, 9, 6, 5, 7, 3, 1];

let selection_sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        [array[i], array[min]] = [array[min], array[i]];

    }
    return array;
}

console.log(selection_sort(array));