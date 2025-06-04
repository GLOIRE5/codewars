/*Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.*/
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let countPositives = 0;
  let sumNegatives = 0;

  for (let num of input) {
    if (num > 0) {
      countPositives++;
    } else if (num < 0) {
      sumNegatives += num;
    }
    
  }

  return [countPositives, sumNegatives];
}