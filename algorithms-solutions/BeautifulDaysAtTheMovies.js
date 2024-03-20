/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
  var counter = 0;
  for (i; i <= j; i++) {
    let reversei = i.toString().split("").reverse().join("");
    let reverseinum = parseInt(reversei);
    let sayi = Math.abs(i - reverseinum) / k;
    if (Number.isInteger(sayi)) {
      counter++;
    }
  }
  return counter;
}
