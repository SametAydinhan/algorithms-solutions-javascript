function encryption(s) {
  let l = s.length;
  let cols = Math.ceil(Math.sqrt(l));
  let rows = Math.floor(Math.sqrt(l));
  if (rows * cols < l) {
    rows++;
  }
  let rewritten = [];
  let result = "";
  for (let i = 0; i < rows; i++) {
    let word = "";
    for (let j = 0; j < cols; j++) {
      let index = i * cols + j;
      if (index < l) {
        word += s[index];
      }
    }
    rewritten.push(word);
  }
  for (let i = 0; i < cols; i++) {
    let word = "";
    for (let j = 0; j < rows; j++) {
      if (i < rewritten[j].length) {
        word += rewritten[j][i];
      }
    }
    result += word;
    if (i < cols - 1) {
      result += " ";
    }
  }

  return result;
}
