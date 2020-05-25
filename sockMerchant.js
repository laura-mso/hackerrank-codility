// https://www.hackerrank.com/challenges/sock-merchant/
// Sock Merchant

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    if (n === 1) {
        return 0;
    } else {
        let result = 0;
        ar.sort();
        for (let i = 0; i < n; i++) {
            if (ar[i] === ar[i + 1]) {
                result++;
                i++;
            }
        }
        return result;
    }
}
