function plusMinus(arr) {
    let n = arr.length;
    let poz = 0;
    let nega = 0;
    let zer = 0;
    for(let a = 0; a< n;a++){
        if(arr[a]>0){
            poz++;
        }else if(arr[a]<0){
            nega++;
        }else{
            zer++;
        }
    }
    let pozkes = poz/n;
    let negkes = nega/n;
    let zerkes = zer/n;
    console.log(pozkes);
    console.log(negkes);
    console.log(zerkes);
}