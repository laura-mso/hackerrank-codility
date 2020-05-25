// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
// Result: 84%

function solution(A) {
    let min;
    let firstSum = A[0];
    let secondSum = A.slice(1).reduce((a, b) => a + b);
    min = Math.abs(firstSum - secondSum);
    for (let index = 1; index < A.length; index++) {
        firstSum += A[index];
        secondSum -= A[index];
        console.log(firstSum, secondSum);
        let newMin = Math.abs(firstSum - secondSum);
        if (newMin < min) {
            min = newMin;
        }
    }
    return min;
}

// console.log(solution([3, 1, 2, 4, 3]));
