// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
// Result: 100%

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if ((A.length === 1) & (A[0] === 1)) {
        return 1;
    }
    if ((A.length === 1) & (A[0] !== 1)) {
        return 0;
    }

    A.sort((a, b) => a - b);

    for (let i = 0; i < A.length - 1; i++) {
        if (A[0] !== 1) {
            return 0;
        }
        if (A[i + 1] !== A[i] + 1) {
            return 0;
        }
    }
    return 1;
}

// console.log(solution([8, 1]));
