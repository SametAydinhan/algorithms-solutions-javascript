function workbook(n, k, arr) {
    // Write your code here
    let page = 0;
    let specialProblemCounter = 0;
    for(let i = 0; i < n ; i++){
        for(let j = 1; j <= arr[i]; j++){
            if(k === 1 || j % k === 1){
                page++;
            }
            if(j === page){
                specialProblemCounter++;
            }
        }
    }
    return specialProblemCounter;
}
