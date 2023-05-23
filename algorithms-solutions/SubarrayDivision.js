function birthday(s, d, m) {
    let counter = 0;
    if(s.length <m){
        return counter;
    }
    var sum;
    for(let i = 0; i<s.length;i++){
        sum = s.slice(i, i+m).reduce((prev,curr) => prev+curr);
        if(sum === d){
            counter++;
        }
    }
    return counter;
 }
 