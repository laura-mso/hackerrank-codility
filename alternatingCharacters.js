// https://www.hackerrank.com/challenges/alternating-characters
// Alternating Characters

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let array = s.split('');
    let N = array.length;
    let deletions = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            array.slice(i - 1, 1);
            deletions++;
        }
    }
    return deletions;
}
