// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/
// Minimum Absolute Difference in an Array

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let minAbsDiff = Infinity;

    for (let i = 1; i < sortedArr.length; i++) {
        let diff = Math.abs(sortedArr[i - 1] - sortedArr[i]);
        if (diff < minAbsDiff) {
            minAbsDiff = diff;
        }
    }

    return minAbsDiff;
}

// console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]));
