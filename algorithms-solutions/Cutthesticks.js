function cutTheSticks(arr) {
  // Write your code here
  let result = [];
  while (arr.length > 0) {
    result.push(arr.length);
    let minLength = Math.min(...arr);
    arr = arr.map((stick) => stick - minLength).filter((stick) => stick > 0);
  }
  return result;
}
