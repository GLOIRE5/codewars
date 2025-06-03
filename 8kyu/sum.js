/*You get an array of numbers, return the sum of all of the positives ones.*/
function positiveSum(arr) {
  return arr.reduce((sum, x) => x > 0 ? sum + x : sum, 0);}