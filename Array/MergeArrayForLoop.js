let array1 = [10, 20, 15, 46, 85, 46];
let array2 = [25, 46, 45, 82, 32];
let array3 = [];

for (let i = 0; i < array1.length; i++) {
    array3[i] = array1[i];
}
for (let i = 0; i < array2.length; i++) {
    array3[array1.length + i] = array2[i];
}
console.log(array3);