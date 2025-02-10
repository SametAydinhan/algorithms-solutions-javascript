function flatlandSpaceStations(n, c) {
  let cities = new Array(n).fill(0);
  let distanceArr = [];
  let result = 0;
  let length = c.length;
  if (n === length) {
    return result;
  }
  cities.map((space, index) => {
    let distance = [];
    c.map((ind) => {
      distance.push(Math.abs(index - ind));
    });
    distanceArr.push(Math.min(...distance));
  });
  result = Math.max(...distanceArr);
  return result;
}
