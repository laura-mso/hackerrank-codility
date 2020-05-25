// https://www.hackerrank.com/challenges/minimum-swaps-2/
// Minimum Swaps 2

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let newArray = arr;
    newArray = newArray.map((elem) => elem - 1);
    let swaps = 0;

    for (let i = 0; i < newArray.length; ) {
        let currentValue = newArray[i];
        if (currentValue !== i) {
            newArray[newArray.lastIndexOf(i)] = currentValue;
            newArray[i] = i;
            swaps++;
        } else {
            i++;
        }
    }
    return swaps;
}

// console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
