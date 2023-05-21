function bonAppetit(bill, k, b) {
    var difference = 0;
    var actualPrice = 0;
    var sum = 0;
    for(let i = 0; i< bill.length;i++){
        if(i == k){
            continue;
        }
        sum += bill[i];
    }
    actualPrice = sum / 2;
    if(actualPrice-b == 0){
        console.log("Bon Appetit"); 
    }else{
        console.log(Math.abs(b-actualPrice));
    }
}