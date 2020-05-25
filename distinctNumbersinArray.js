// https://app.codility.com/programmers/lessons/6-sorting/distinct/
// Result: 100%

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i + 1] !== A[i]) {
            count++;
        }
    }
    return count;
}

// console.log(solution([5, 5, 6, 9, 2, 3, 3, 0]));
// console.log(solution([5]));
