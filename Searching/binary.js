let array = [1, 4, 5, 6, 2, 3, 9, 3, 10, 15, 8];
let sort = array.sort((a, b) => a - b);

console.log(sort);

const binary = (sort, target) => {
    let left = 0;
    let right = sort.length - 1;
    for (let i = 0; i < sort.length; i++) {
        let mid = Math.floor((left + right) / 2);

        if (sort[mid] == target) {
            return mid;
        }
        else if (sort[mid] < target) {
            left += 1;
        }
        else {
            right -= 1;
        }
    }
    return -1;
}

const ans = binary(sort, 9);
console.log(ans);

