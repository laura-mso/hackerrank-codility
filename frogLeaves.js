// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
// Result: 72%

function solution(X, A) {
    const first = A[0];
    const used = new Array(X);
    used[first - 1] = first;

    let count = 0;

    for (let i = 1; i < A.length; i++) {
        used[A[i] - 1] = A[i];
        count++;
        if (!used.includes(undefined)) {
            return count;
        }
    }

    return -1;
}

// console.log(solution(3, [1, 6, 5, 4, 4, 4, 4, 4, 2, 3]));
