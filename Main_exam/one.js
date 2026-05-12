let array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8];

let remove_duplicate = (array) => {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[j]) {
            j++;
            array[j] = array[i];
        }
    }
    return j + 1;
}
newSize = remove_duplicate(array);
console.log(array.slice(0, newSize))