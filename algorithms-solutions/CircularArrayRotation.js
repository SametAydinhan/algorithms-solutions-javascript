/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(a, k, queries) {
  // Write your code here
  let lastElement;
  for (let i = 1; i <= k; i++) {
    lastElement = a.pop();
    a.unshift(lastElement);
  }
  let lastArray = [];
  queries.map((query) => {
    lastArray.push(a[query]);
  });
  return lastArray;
}
