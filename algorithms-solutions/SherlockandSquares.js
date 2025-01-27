function squares(a, b) {
  // Write your code here
  let lower = Math.ceil(Math.sqrt(a));
  let upper = Math.floor(Math.sqrt(b));
  let squareIntegers;
  lower > upper ? (squareIntegers = 0) : (squareIntegers = upper - lower + 1);
  return squareIntegers;
}
