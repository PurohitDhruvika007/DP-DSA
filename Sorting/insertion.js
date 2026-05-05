let array = [1, 4, 5, 6, 2, 3, 9, 3, 10, 15, 8];

const insertion = (array) => {
    for (let i = 1; i < array.length; i++) {
        key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key
    }
    return array;
}

const ans = insertion(array);
console.log(ans);