function nonDivisibleSubset(k, s) {
  let remainders = new Array(k).fill(0);
  s.forEach((num) => remainders[num % k]++);
  let result = 0;
  if (remainders[0] !== 0) {
    result += 1;
  }
  if (k % 2 == 0 && remainders[k / 2] !== 0) {
    result += 1;
  }
  for (let i = 1; i < k / 2; i++) {
    result += Math.max(remainders[i], remainders[k - i]);
  }
  return result;
}
