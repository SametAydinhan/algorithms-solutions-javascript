function acmTeam(topic) {
  // Write your code here
  let mostKnowTeams = [0, 0];

  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let countOnes = 0;
      for (let k = 0; k < topic[i].length; k++) {
        if (topic[i][k] === "1" || topic[j][k] === "1") {
          countOnes++;
        }
      }
      if (countOnes > mostKnowTeams[0]) {
        mostKnowTeams[0] = countOnes;
        mostKnowTeams[1] = 1;
      } else if (countOnes === mostKnowTeams[0]) {
        mostKnowTeams[1]++;
      }
    }
  }
  return mostKnowTeams;
}
