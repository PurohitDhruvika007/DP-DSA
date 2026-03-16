// let array = [10, 20, 40, 50, 60, 70, 80];
// let element1 = 30;
// let position = 2;

// console.log(array)

// for (i = array.length - 1; i >= 0; i--) {
//     if (i >= position) {
//         array[i + 1] = array[i];
//         if (i == position) {
//             array[i] = element1;
//         }
//     }
// }

// console.log(array)

let array = [10, 20, 30, 40, 60];
array.splice(4, 0, 50);
console.log(array)