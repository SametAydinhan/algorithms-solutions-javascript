function miniMaxSum(arr) {
    let sorted = arr.sort();
    let sum = 0;
    let sortedLength = sorted.length;
    for (let i = 1; i < length - 1; i++) {
      sum += sorted[i];
    }
    let mins = sum + sorted[0];
    let max = sum + sorted[length - 1];
    console.log(mins + " " + max);
  
  }