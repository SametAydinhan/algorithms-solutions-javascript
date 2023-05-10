function plusMinus(arr) {
    let n = arr.length;
    let poz = 0;
    let neg = 0;
    let zer = 0;
    for(let a = 0; a< n;a++){
        if(arr[a]>0){
            poz++;
        }else if(arr[a]<0){
            neg++;
        }else{
            zer++;
        }
    }
    let pozkes = poz/n;
    let negkes = neg/n;
    let zerkes = zer/n;
    console.log(pozkes);
    console.log(negkes);
    console.log(zerkes);
}