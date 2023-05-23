
function compareTriplets(a, b) {
    var alice = 0;
    var bob = 0;
    var n = a.length;
    for(let i = 0;i<n;i++){
        if(a[i] > b[i]){
            alice++;
        }else if (a[i]<b[i]){
            bob++;
        }
    }
    return ([alice,bob]);
}

