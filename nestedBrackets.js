// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
// Result: 75%

function solution(S) {
    while (S.search(/\(\)|\[\]|\{\}/) !== -1) {
        S = S.replace(/\(\)/g, '');
        S = S.replace(/\[\]/g, '');
        S = S.replace(/\{\}/g, '');
    }

    if (S.length == 0) {
        return 1;
    } else {
        return 0;
    }
}

// console.log(solution('(){}'));

// solution by someone else:
function solution2(S) {
    var len = S.length;

    if (!len) {
        return 1;
    }

    var stack = [],
        matches = {
            '{': '}',
            '(': ')',
            '[': ']',
        };

    for (i = 0; i < len; i++) {
        var currentCharacter = S[i];
        if (matches[currentCharacter]) {
            stack.push(currentCharacter);
        } else {
            if (!stack.length) {
                return 0;
            }
            var previousCharacter = stack.pop();
            if (matches[previousCharacter] !== currentCharacter) {
                return 0;
            }
        }
    }

    return stack.length ? 0 : 1;
}
