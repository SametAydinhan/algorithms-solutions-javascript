
function gridSearch(G, P) {
    // Write your code here
    let gridRow = G.length, gridColumn = G[0].length;
    let patternRow = P.length, patternColumn = P[0].length;
    
    for(let i = 0; i <= gridRow - patternRow; i++){
        for(let j = 0; j <= gridColumn - patternColumn; j++){
            let found = true;
            for(let x = 0; x < patternRow; x++){
                if(G[i + x].indexOf(P[x], j) !== j){
                    found = false;
                    break;
                }
            }
            if(found) return "YES";
        }
    }
    return "NO"
}
