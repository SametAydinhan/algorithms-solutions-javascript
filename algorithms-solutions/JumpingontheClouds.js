// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
  let energy = 100;
  let count = 0;
  let index;
  while (index !== 0 && energy >= 0) {
    count === 0 && (index = 0);
    index = (index + k) % c.length;
    energy = c[index] > 0 ? energy - 3 : energy - 1;
    count++;
  }

  return energy;
}
