function hurdleRace(k, height) {
    let maxHeight = 0;
    for(let i = 0; i < height.length ;i++){
        if(height[i] > maxHeight ){
            maxHeight = height[i];
        }
    }
    if (maxHeight < k){
        return 0;
    }else{
        return maxHeight -k;
    }
}