// https://www.hackerrank.com/challenges/counting-valleys/
// Counting Valleys

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let currentLevel = 0;
    let diff = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        const element = s[i];
        diff = element === 'U' ? 1 : -1;
        currentLevel = currentLevel + diff;
        if (element === 'U' && currentLevel === 0) {
            count++;
        }
    }
    return count;
}

// console.log(countingValleys(8, 'UDDDUDUU'));
