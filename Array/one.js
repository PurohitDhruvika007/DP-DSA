// 1.
// let array = [1, 2, 8, 3, 4, 5, 6];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 2.
// let array = [1, 2, 3, 4, 5, 6];
// let length = 0;
// for (let i = 0; i < array.length; i++) {
//     length++;
// }
// console.log(length);
// console.log(array.length);


// 3,4.
// array = [1, 2, 3, 4, 5];
// console.log(array[0])
// console.log(array[array.length - 1])

// 5.
// let array = [1, 2, 3, 4, 5];
// array[array.length] = 6;
// array.push(7);
// console.log(array);


// 6.
// let array = [1, 2, 3, 4, 5];
// for (i = array.length - 1; i >= 0; i--) {
//     array[i + 1] = array[i];
// }
// array[0] = 0;
// array.splice(0, 0, 10);
// for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// 7.
// array = [1, 2, 3, 4, 5, 6];
// array.length = array.length - 1;
// array.splice(4, 1);
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// 8.
// let array = [10, 20, 30, 40, 50];
// for (let i = 0; i < array.length; i++) {
//     array[i] = array[i + 1];
// }
// array.length = array.length - 1;
// array.splice(0,1);
// console.log(array);

// 9.
// let array = [10, 20, 30, 40, 50];
// let ele = 35;
// let isThere = false;
// for (i = 0; i < array.length; i++) {
//     if (ele === array[i]) {
//         isThere = true;
//         break;
//     }
// }
// console.log(array.includes(30));
// (isThere) ? console.log("element is available") : console.log("element is not available");


// 10.
// let array = [10, 20, 30, 40, 50];
// for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// 11.
// let array = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(`sum of all element is ${sum}`);
// console.log(array.reduce((pre, cur) => cur + pre))

// 12.
// let array = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// let avg = sum / array.length;
// console.log(avg);


// 13.
// let array = [1, 2, 3, 4, 5, 6];
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//         max = array[i];
//     }
// }
// console.log(max);
// console.log(array.reduce((pre, cur) => {
//     if (pre > cur) {
//         cur = pre;
//     }
//     return cur
// }))


// 14.
// let array = [1, 2, 4, 5, 6, 7];
// let min = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//         min = array[i];
//     }
// }
// console.log(min);
// console.log(array.reduce((pre, cur) => {
//     if (pre < cur) {
//         cur = pre;
//     }
//     return cur;
// }))


// 15.
// let array = [15, 25, 41, 1, 95, 16, 2];
// for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//         if (array[i] > array[j]) {
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }
// console.log(array);
// console.log(array.sort((a, b) => a - b));

//16.
// let array = [52, 16, 46, 85, 12, 67, 23];
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (array[i] > array[j]) {
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }
// console.log(array.sort((a, b) => b - a))
// console.log(array);

// 17.
// let array = [1, 2, 3, 4, 5, 6];
// for (i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }


// 18.
// let array = [1, 2, 3, 4, 5, 6];
// let element = 9;
// let isMatch = false;
// for (i = 0; i < array.length; i++) {
//     if (element == array[i]) {
//         isMatch = true;
//         break;
//     }
// }
// (isMatch) ? console.log("element is there in array") : console.log("element is not there in array");


// 19.

// let array = [1, 2, 3, 4, 5, 6];
// let element = 4;
// for (i = 0; i < array.length; i++) {
//     if (element === array[i]) {
//         console.log(`element is at ${i}th position`);
//     }
// }


// 20.

// let array = [1, 2, 3, 4, 5];
// let element = 1;
// for (i = 0; i < array.length; i++) {
//     if (array[i] == element) {
//         let position = i;
//         while (position < array.length) {
//             array[i] = array[i + 1];
//             i++;
//             position++;
//         }
//     }

// }
// array.length = array.length - 1;
// array.splice(2, 1);
// console.log(array)


// 21.
// let array = [1, 2, 4, 5, 6, 7];
// let position = 2;
// for (i = array.length - 1; i >= 0; i--) {
//     if (position <= i) {
//         array[i + 1] = array[i];
//     }
// }
// array[position] = 10;
// console.log(array);

// 22.

// let array = [21, 3, 21, 6, 5, 21];
// let count = 0;
// let element = 67;
// for (i = 0; i < array.length; i++) {
//     if (element == array[i]) {
//         count++;
//     }
// }
// console.log(`${element} count is ${count}`);


// 23.
// let array = [23, 15, 15, 23, 46, 36, 23];
// for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//         if (array[i] === array[j]) {
//             for (let k = j; k < array.length; k++) {
//                 array[k] = array[k + 1];

//             }
//             array.length--;
//         }
//     }
// }
// console.log(array);


// 24.
// let array1 = [1, 2, 3, 4];
// let array2 = [5, 6, 7, 8];
// let merge = [];
// for (let i = 0; i < array1.length; i++) {
//     merge[i] = array1[i];
// }
// for (let i = 0; i < array2.length; i++) {
//     merge[array1.length + i] = array2[i];
// }
// console.log(merge)


// 25.
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [6, 7, 5];
// let total = [...array1, ...array2, ...array3];
// console.log(total)


// 26.
// let array1 = [1, 3, 2, 5, 6, 7];
// let array2 = [1, 4, 5, 8, 7, 9];
// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//         if (array1[i] === array2[j]) {
//             console.log(`common elements  between two array are ${array1[i]}`);
//         }
//     }
// }

//27.


//28.
// let array = [1, 2, 3];
// if (array.length == 0) {
//     console.log("array is empty");
// }
// else {
//     console.log("array is not empty");
// }

//29.
// let array1 = [1, 2, 3, 45, 6, 7, 7];
// let copy = [];
// for (let i = 0; i < array1.length; i++) {
//     copy[i] = array1[i];
// }
// console.log(copy);


//30.
// let array = [1, 2, 3, 45, 5, 6];
// let clone = [...array];
// console.log(clone);

// 31.
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 3, 3, 4, 5];
// let isEqual = true;
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//         isEqual = false;
//     }
// }
// (isEqual) ? console.log("array is equal") : console.log("array is not equal");

// 32.
// let array = [46, 12, 3, 29, 89, 57];
// for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//         if (array[i] < array[j]) {
//             temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }
// console.log(`second largest element is ${array[1]}`);

// 33.
// let array = [15, 25, 64, 2, 52, 46, 12];
// for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//         if (array[i] > array[j]) {
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }
// console.log(`the second smallest element is ${array[1]}`);

// 37.
// let array = [1, 2, 3, 4, 56, 6, 78];
// for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i]);
//     }
// }


// 38.
// let array = [1, 2, 3, 45, 6, 7, 8];
// for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//         console.log(array[i]);
//     }
// }

// 39.
// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i] * array[i]);
// }

// 40.
// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// for (i = 0; i < array.length; i++) {
//     console.log(array[i] * 2);
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let ans = array.reduce((pre, cur) => {
//     pre += cur;
//     return pre;
// })
// console.log(ans);

// 42.

