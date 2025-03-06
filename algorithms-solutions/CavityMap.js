function cavityMap(grid) {
    // Write your code here
    for(let i = 1; i < grid.length - 1; i++){
        let str = grid[i].split("");
        for(let j = 1; j < str.length - 1; j++){
            if([str[j - 1], str[j + 1], grid[i - 1][j], grid[i + 1][j]].every(val => str[j] > val)){
                str[j] = "X";
            }
        }
        grid[i] = str.join("");
    }
    
    return grid;
}
