function extraLongFactorials(n) {
  // Write your code here
  let number = BigInt(n);
  let factorial = BigInt(1);
  while (number > 0) {
    factorial *= number;
    --number;
  }
  console.log(factorial.toString());
}
