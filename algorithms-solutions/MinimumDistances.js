function minimumDistances(a) {
  // Write your code here
  let minDistance = Infinity;
  const indexMap = new Map();
  for (let i = 0; i < a.length; i++) {
    if (indexMap.has(a[i])) {
      minDistance = Math.min(minDistance, i - indexMap.get(a[i]));
    }
    indexMap.set(a[i], i);
  }
  return minDistance === Infinity ? -1 : minDistance;
}
