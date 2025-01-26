/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
  // Write your code here
  const digits = n.toString().split("").map(Number);
  let counter = 0;
  digits.map((num) => {
    if (n % num === 0) {
      counter++;
    }
  });
  return counter;
}
