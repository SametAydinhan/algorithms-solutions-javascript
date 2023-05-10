function staircase(n) {
    for(let i = n; i > 0; i--){
        let result = '';
       for(let j = 0; j< i-1; j++){
           result += ' ';
       }
       for(let k = i-1; k < n ; k++){
           result += '#';
       }
       console.log(result);
    } 
}