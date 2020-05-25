// https://www.hackerrank.com/challenges/ctci-ransom-note
// Hash Tables: Ransom Note

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let availableWords = magazine;
    let neededWords = note;
    let storedWords = {};

    for (let i = 0; i < availableWords.length; i++) {
        const element = availableWords[i];

        if (storedWords[element]) {
            storedWords[element] = storedWords[element] + 1;
        } else {
            storedWords[element] = 1;
        }
    }

    for (let i = 0; i < neededWords.length; i++) {
        const element = neededWords[i];

        if (storedWords[element]) {
            storedWords[element] = storedWords[element] - 1;
        } else {
            // It is required by Hackerrank to be logged
            console.log('No');
            return 'No';
        }
    }
    console.log('Yes');
    return 'Yes';
}

// console.log(checkMagazine('give me one grand today night', 'give one grand today'));
