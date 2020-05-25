// https://www.hackerrank.com/challenges/ctci-bubble-sort/
// Sorting: Bubble Sort

// Complete the countSwaps function below.
function countSwaps(a) {
    let n = a.length;
    let count = 0;

    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                count++;
            }
        }
    }
    console.log(`Array is sorted in ${count} swaps.`);
    console.log('First Element:', a[0]);
    console.log('Last Element:', a[n - 1]);
}

// console.log(countSwaps([4, 2, 3, 1]));
