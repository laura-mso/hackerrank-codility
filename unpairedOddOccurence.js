// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// Result: 55%

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 1) {
        return A[0];
    } else {
        A.sort();
        if (A[0] !== A[1]) {
            return A[0];
        } else {
            A.sort();
            let resultArray = [];
            let i = 1;
            while (resultArray.length < 1) {
                if (A[i] !== A[i + 1] && A[i] !== A[i - 1]) {
                    resultArray.push(A[i]);
                }
                i++;
            }
            return resultArray[0];
        }
    }
}

// console.log(solution([9, 3, 9, 3, 9, 7, 9]));

// Result: 100%
function solution2(A) {
    let result = 0;

    for (let element of A) {
        result = element ^ result;
    }

    return result;
}

// console.log(solution2([1, 2, 3, 1, 2]));
