function saveThePrisoner(n, m, s) {
  // first sugar gave the first man and start the second man.
  let result = (s + m - 1) % n;
  return result === 0 ? n : result;
}
