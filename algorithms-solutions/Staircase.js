function staircase(n) {
    for(let i = n; i > 0; i--){
        let result = '';
       for(let j = 0; j< i-1; j++){
           result += ' ';
       }
       for(let m = i-1; m< n ; m++){
           result += '#';
       }
       console.log(result);
    } 
}