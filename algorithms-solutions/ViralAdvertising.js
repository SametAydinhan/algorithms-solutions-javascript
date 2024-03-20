/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
function viralAdvertising(n) {
  let people = 5;
  let like = Math.floor(people / 2);
  for (let i = 2; i <= n; i++) {
    people = Math.floor(people / 2) * 3;
    like = like + Math.floor(people / 2);
  }
  return like;
}
