function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let fallingApples =  apples.map((apple) => {
     return a + apple;
    });
     let fallingOranges =  oranges.map((orange) => {
     return b + orange;
    });
    let appleCounter = 0;
    let orangeCounter = 0;
    fallingApples.map((fallingApple) =>{
        if(fallingApple >= s && fallingApple <= t){
            appleCounter++;
        }
    }) 
    fallingOranges.map((fallingOrange) => {
        if(fallingOrange >= s && fallingOrange <= t){
            orangeCounter++;
        }
    })
    console.log(appleCounter +"\n" + orangeCounter);
}