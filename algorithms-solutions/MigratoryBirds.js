function migratoryBirds(arr) {
    const countMap = arr.reduce((map, val) => {
    map[val] = (map[val] || 0) + 1;
    return map;
  }, {});

  let mostRepeatedElement;
  let maxCount = 0;

  for (const key in countMap) {
    if (countMap[key] > maxCount) {
      mostRepeatedElement = key;
      maxCount = countMap[key];
    }
  }

  return mostRepeatedElement;
}