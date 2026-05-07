let array = [4, 3, 7, 5, 1, 9, 5, 2];

let insertion = (array) => {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

console.log(insertion(array))