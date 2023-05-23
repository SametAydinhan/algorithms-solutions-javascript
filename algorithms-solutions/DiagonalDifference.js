
function diagonalDifference(arr) {
    var ltrdia = 0;
    var rtldia = 0;
    var n = arr.length; 
    for(var i = 0;i<n;i++){
        for(var j = 0; j<n;j++){
            if(i === j ){
                ltrdia += arr[i][j];
            }
            if(i+j === n - 1){
                rtldia += arr[i][j];
            }
        }
    }
    return Math.abs(ltrdia - rtldia);
}
