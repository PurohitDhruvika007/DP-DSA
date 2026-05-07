let array = [1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 8];
let removeDublicate = (array) => {
    if (array.length == 0) return 0;
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[j]) {
            j++;
            array[j] = array[i];
        }
    }
    return j + 1;
}

let newLength = removeDublicate(array);
console.log("new length = ", newLength);
console.log("updated array = ", array.slice(0, newLength));