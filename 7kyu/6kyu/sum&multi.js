/*Write a function that accepts two parameters (sum and multiply) and find two numbers [x, y], where x + y = sum and x * y = multiply.*/
function findNumbers(sum, multiply) {
  for (let x = 0; x <= sum; x++) {
    for (let y = 0; y <= sum; y++) {
      if (x + y === sum && x * y === multiply) {
        return [x, y];
      }
    }
  }
}