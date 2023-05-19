function breakingRecords(scores) {
    let minMaxCounter =[0,0];
    let min = scores[0];
    let max = scores[0];
    
    for(let i = 1;i<scores.length;i++){
        if(scores[i] > max){
            max = scores[i];
            minMaxCounter[0]++;
        }
        if(scores[i] < min){
            min = scores[i];
            minMaxCounter[1]++;
        }
    }
    return minMaxCounter;
}