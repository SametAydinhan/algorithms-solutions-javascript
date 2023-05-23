function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    
    for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            var sum = ar[i] + ar[j];
            if(sum % k === 0){
                counter++;
            }
        }
    }
    return counter;

}
