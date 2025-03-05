function fairRations(B) {
    // Write your code here
    let breadDistributed = 0;
    let oddFlag;
    for(let i = 0; i < B.length; i++){
        if(B[i] % 2 !== 0){
            B[i]++;
            if(i !== B.length - 1){
                B[i + 1]++;
            }else {
                B[i - 1]++;
            }
            breadDistributed += 2;
            
            if(B[i - 1] % 2 !== 0 || B[i] % 2 !== 0 || B[i + 1] % 2 !== 0){
                oddFlag = true;
            }else{
                oddFlag = false;
            }
        }
    }
    return oddFlag ? 'NO' : breadDistributed;
}
