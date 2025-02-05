function organizingContainers(container) {
  // Write your code here
  let capacityEach = [];
  let typeEach = [];
  for (let i = 0; i < container.length; i++) {
    let total = 0;
    let type = 0;
    for (let j = 0; j < container[i].length; j++) {
      total = total + container[i][j];
      type = type + container[j][i];
    }
    capacityEach.push(total);
    typeEach.push(type);
  }
  let sorted1 = capacityEach.sort((a, b) => a - b);
  let sorted2 = typeEach.sort((a, b) => a - b);
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return "Impossible";
    }
  }
  return "Possible";
}
