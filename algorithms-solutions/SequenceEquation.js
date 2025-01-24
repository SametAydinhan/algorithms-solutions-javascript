/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
  // Write your code here
  let result = [];
  for (let i = 1; i <= p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (i === p[j]) {
        p.map((num, index) => {
          if (j + 1 === num) {
            result.push(index + 1);
          }
        });
      }
    }
  }
  return result;
}
