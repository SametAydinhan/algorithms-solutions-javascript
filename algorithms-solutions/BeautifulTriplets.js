function beautifulTriplets(d, arr) {
  // Write your code here
  return arr.filter((val) => arr.includes(val + d) && arr.includes(val + d * 2))
    .length;
}
