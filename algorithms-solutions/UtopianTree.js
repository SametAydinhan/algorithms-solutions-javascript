function utopianTree(n) {
    let utopianTreeLength = 1;
    for(let i = 0;i<n;i++){
        if(i%2==1){
            utopianTreeLength++;
        }else{
            utopianTreeLength *= 2;
        }
    }
    return utopianTreeLength;
}