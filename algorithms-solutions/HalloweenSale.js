function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let counter = 0;
  while (s >= p) {
    s -= p;
    p = Math.max(m, p - d);
    counter++;
  }
  return counter;
}
