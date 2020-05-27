// https://www.hackerrank.com/challenges/new-year-chaos/
// New Year Chaos

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let diff = 0;
    let bribes = 0;

    for (let i = 0; i < q.length; i++) {
        diff = q[i] - i - 1;
        if (diff > 2) {
            console.log('Too chaotic');
            return;
        }

        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes = bribes + 1;
            }
        }
    }
    console.log(bribes);
    return;
}

// console.log(minimumBribes([3, 2, 1, 4, 5, 6, 7]));
