function formingMagicSquare(s) {
    //These are all the magicSquares that can be 3*3 with my research on the internet.
    const magicSquares = [
      [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
      [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
      [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
      [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
      [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
      [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
      [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
      [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    ];
  
    let minCost = 1000;
  
    for (let i = 0; i < magicSquares.length; i++) {
      let cost = 0;
      const currentMagicSquare = magicSquares[i];
      
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          cost += Math.abs(s[row][col] - currentMagicSquare[row][col]);
        }
      }
  
      (minCost > cost) ? minCost = cost: minCost;
    }
  
    return minCost;
  }