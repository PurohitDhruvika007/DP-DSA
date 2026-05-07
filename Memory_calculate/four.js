const maxSubArray = (array) => {
    let maxSum = array[0];
    let currentSum = array[0];
    for (let i = 0; i < array.length; i++) {
        currentSum = Math.max(array[i], currentSum + array[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
let array = [1, 2, 3, 4, 5];
console.log(maxSubArray(array));