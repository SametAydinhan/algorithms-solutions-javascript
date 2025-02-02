function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here
  let validSquares = 0;
  let directions = [
    [+1, 0],
    [+1, +1],
    [0, +1],
    [-1, +1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [+1, -1],
  ];
  obstacles = obstacles.filter(
    (el) =>
      el[0] - el[1] == r_q - c_q ||
      el[0] + el[1] == r_q + c_q ||
      el[0] == r_q ||
      el[1] == c_q
  );
  directions.forEach((direction) => {
    let r = r_q + direction[0];
    let c = c_q + direction[1];
    while (r <= n && r > 0 && c <= n && c > 0) {
      if (obstacles.some((el) => el[0] == r && el[1] == c)) {
        break;
      }
      validSquares++;
      r += direction[0];
      c += direction[1];
    }
  });
  return validSquares;
}
