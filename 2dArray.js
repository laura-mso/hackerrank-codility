// https://www.hackerrank.com/challenges/luck-balance
// Hackerrank: Greedy Algorithms: Luck Balance

function luckBalance(k, contests) {
    let array = contests;
    let importantContestResult = [];

    let unImportantContestSum = 0;
    let importantContestSum = 0;

    for (let i = 0; i < contests.length; i++) {
        if (array[i][1] === 0) {
            unImportantContestSum += array[i][0];
        } else {
            importantContestResult.push(array[i][0]);
        }
    }

    importantContestResult.sort((a, b) => b - a);

    if (importantContestResult.length > 0) {
        for (let i = 0; i < Math.min(k, importantContestResult.length); i++) {
            importantContestSum += importantContestResult[i];
        }
        for (let i = k; i < importantContestResult.length; i++) {
            importantContestSum -= importantContestResult[i];
        }
    }
    let result1 = unImportantContestSum ? unImportantContestSum : 0;
    let result2 = importantContestSum ? importantContestSum : 0;

    return result1 + result2;
}

// console.log(
//     luckBalance(100, [
//         [437, 1],
//         [68, 0],
//         [319, 0],
//         [565, 0],
//         [307, 1],
//         [512, 0],
//         [493, 0],
//         [30, 0],
//         [557, 0],
//         [367, 0],
//         [547, 1],
//         [263, 0],
//         [481, 0],
//         [78, 0],
//         [492, 1],
//         [56, 1],
//         [81, 0],
//         [154, 0],
//         [503, 1],
//         [375, 0],
//         [152, 0],
//         [401, 0],
//         [226, 0],
//         [482, 0],
//         [264, 0],
//         [52, 0],
//         [9, 0],
//         [145, 0],
//         [72, 0],
//         [293, 0],
//         [15, 0],
//         [42, 1],
//         [305, 0],
//         [34, 0],
//         [509, 0],
//         [156, 0],
//         [321, 0],
//         [437, 0],
//         [510, 1],
//         [449, 0],
//         [79, 0],
//         [492, 0],
//         [191, 0],
//         [354, 1],
//         [529, 0],
//         [315, 0],
//         [384, 0],
//         [371, 0],
//         [100, 0],
//         [480, 0],
//         [408, 0],
//         [221, 0],
//         [286, 0],
//         [551, 0],
//         [106, 0],
//         [123, 0],
//         [549, 0],
//         [183, 1],
//         [428, 0],
//         [435, 0],
//         [370, 0],
//         [46, 0],
//         [289, 0],
//         [246, 0],
//         [414, 1],
//         [159, 0],
//         [442, 0],
//         [286, 0],
//         [21, 0],
//         [119, 0],
//         [263, 0],
//         [572, 0],
//         [334, 0],
//         [96, 0],
//         [307, 0],
//         [323, 0],
//         [554, 1],
//         [487, 0],
//         [455, 1],
//         [399, 0],
//         [559, 0],
//         [276, 0],
//         [357, 1],
//         [586, 0],
//         [346, 0],
//         [240, 1],
//         [492, 0],
//         [63, 0],
//         [262, 0],
//         [489, 0],
//         [124, 1],
//         [526, 0],
//         [350, 1],
//         [243, 0],
//         [35, 0],
//         [292, 0],
//         [418, 0],
//         [364, 1],
//         [41, 1],
//         [519, 0],
//     ])
// );
