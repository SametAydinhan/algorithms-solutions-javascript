function stones(n, a, b) {
    // Write your code here
    let result = new Set();
    
    for(let k = 0;k < n; k++){
        let lastStone = k * b + (n - 1 - k) * a;
        result.add(lastStone);
    }
    return [...result].sort((x,y) => x - y);
}
