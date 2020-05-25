// https://www.hackerrank.com/challenges/two-strings/
// Two Strings

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let s1Array = s1.split('');
    let s2Array = s2.split('');

    let foundOnePair = 0;
    let foundStrings1 = {};

    s1Array.forEach((element) => (foundStrings1[element] = 1));

    s2Array.forEach((element) => {
        if (foundStrings1[element] === 1) {
            foundOnePair = 1;
        }
    });
    return foundOnePair ? 'YES' : 'NO';
}

// console.log(twoStrings('Hi', 'world'));
