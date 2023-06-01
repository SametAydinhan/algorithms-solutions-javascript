function climbingLeaderboard(ranked, player) {
    const  uniqueRanked = Array.from(new Set(ranked));
    const n = uniqueRanked.length;
    let playerRanks = [];
    let j = n-1;
    for (let i = 0; i< player.length;i++){
        while(j >= 0 && player[i] >= uniqueRanked[j]){
            j--;
        }
        playerRanks.push(j+2);
    }
    return playerRanks;
  }