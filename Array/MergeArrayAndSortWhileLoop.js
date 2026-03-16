let array = [5, 10, 12, 16, 20, 25, 46, 75];
let array2 = [52, 56, 75, 85, 95];
let array3 = [];
let a1 = 0;
let a2 = 0;
let a3 = 0;

while (a1 < array.length || a2 < array2.length) {
    if (array[a1] < array2[a2]) {
        array3[a3] = array[a1];
        a1++;
    }
    else {
        array3[a3] = array2[a2];
        a2++;
    }
    a3++;
}
console.log(array3);