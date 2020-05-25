// https://www.hackerrank.com/challenges/repeated-string
// Repeated String

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let length = s.length;
    let minFitInto = Math.floor(n / length);
    let leftOverCount = n % length;
    let baseCount = 0;

    if (minFitInto > 1) {
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            if (element === 'a') {
                baseCount++;
            }
        }
    }
    let count = baseCount * minFitInto;

    let additionalCount = 0;

    if (leftOverCount) {
        for (let i = 0; i < leftOverCount; i++) {
            const element = s[i];
            if (element === 'a') {
                additionalCount++;
            }
        }
    }
    return count + additionalCount;
}

// console.log(repeatedString('aab', 882787));
