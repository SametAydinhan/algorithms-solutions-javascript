function repeatedString(s, n) {
  // Write your code here
  let fullRepeats = Math.floor(n / s.length);
  let remaining = n % s.length;

  let countA = (s.split("a").length - 1) * fullRepeats;
  countA += s.slice(0, remaining).split("a").length - 1;

  return countA;
}
