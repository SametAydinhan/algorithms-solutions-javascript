function kaprekarNumbers(p, q) {
  // Write your code here
  let result = [];

  for (let n = p; n <= q; n++) {
    let squared = (n * n).toString();
    let len = squared.length;
    let d = n.toString().length;
    let right = squared.slice(-d);
    let left = squared.slice(0, len - d) || "0";
    if (parseInt(left) + parseInt(right) === n) {
      result.push(n);
    }
  }

  console.log(result.length > 0 ? result.join(" ") : "INVALID RANGE");
}
