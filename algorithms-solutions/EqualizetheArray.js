function equalizeArray(arr) {
  // Write your code here
  let frequency = {};
  let maxCount = 0;
  let result = 0;
  for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
    }
  }
  result = arr.length - maxCount;
  return result;
}
