// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
// Result: 100%

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length > 1) {
        for (let i = 1; i <= K; i++) {
            A.unshift(A.pop());
        }
    }
    return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));
