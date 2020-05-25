// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
// Result: 100%

function solution(N) {
    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }
    const binary = dec2bin(N);
    let currentResult = 0;

    for (let i = 1; i < binary.length; i++) {
        if (binary[i - 1] == 1 && binary[i] == 0) {
            let j = i;
            let count = 0;
            while (binary[j] == 0) {
                count++;
                j++;
            }
            if (count > currentResult && binary[i + count] == 1) {
                currentResult = count;
            }
            i + j;
        }
    }
    return currentResult;
}

// console.log(solution(1041));
