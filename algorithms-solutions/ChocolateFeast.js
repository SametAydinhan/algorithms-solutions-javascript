function chocolateFeast(n, c, m) {
  // Write your code here
  let bars = Math.floor(n / c);
  let wrappers = bars;
  let remainder = 0;
  while (wrappers >= m) {
    remainder = wrappers % m;
    wrappers = Math.floor(wrappers / m);
    bars += wrappers;
    wrappers += remainder;
  }
  return bars;
}
