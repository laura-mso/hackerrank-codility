// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
// Result: 100%

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (X === Y) {
        return 0;
    }
    const distance = Y - X;
    if (D > distance) {
        return 1;
    }
    return Math.ceil(distance / D);
}

// console.log(solution(10, 85, 30));
