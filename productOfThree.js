// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
// Result: 77%

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => Math.abs(b) - Math.abs(a));
    const firstValue = A[0] * A[1];
    let lastMax = firstValue * A[2];
    let currentMax;
    for (let i = 3; i < A.length; i++) {
        currentMax = A[i] * firstValue;
        if (currentMax > lastMax) {
            return currentMax;
        }
    }
    return lastMax;
}

// console.log(solution2([-3, 1, 2]));

// Result: 100% - from someone else
function solution2(A) {
    const N = A.length;
    A.sort((a, b) => a - b);
    return Math.max(A[0] * A[1] * A[N - 1], A[N - 3] * A[N - 2] * A[N - 1]);
}

// console.log(solution2([-3, 1, 2, 2]));
