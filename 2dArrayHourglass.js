// https://www.hackerrank.com/challenges/2d-array/
// 2d Array - DS

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    console.log(arr);
    let firstRowSum = -Infinity;
    let secondRowSum = -Infinity;
    let thirdRowSum = -Infinity;
    let maxSum = -Infinity;
    let currentSum = -Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            firstRowSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            secondRowSum = arr[i + 1][j + 1];
            thirdRowSum = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            currentSum = firstRowSum + secondRowSum + thirdRowSum;
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}
