function pageCount(n, p) {
    var rightTurn =0;
    var leftTurn = 0;
    
        for(let i = n;i>p ;i--){
            if(i%2==1){
                continue;
            }else{
                rightTurn++;
            }
         }
         for(let i = 0;i<p;i++){
             if(i%2==0){
                 continue;
             }else{
                 leftTurn++;
             }
         }
     return rightTurn<=leftTurn ? rightTurn :  leftTurn;
 }
    