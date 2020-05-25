// https://www.hackerrank.com/challenges/mark-and-toys/
// Mark and Toys

// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let sortedPrices = prices.sort((a, b) => a - b);
    let budget = k;

    let i = 0;

    while (budget - sortedPrices[i] >= 0) {
        budget = budget - sortedPrices[i];
        i++;
    }
    return i;
}

// console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
