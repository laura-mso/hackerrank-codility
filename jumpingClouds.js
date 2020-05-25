// https://www.hackerrank.com/challenges/jumping-on-the-clouds/
// Jumping on the Clouds

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let count = 0;
    for (let i = 0; i < c.length; ) {
        if (c[i + 2] === 0) {
            i += 2;
            count++;
        } else {
            i++;
            count++;
        }
    }
    return count - 1;
}
