function strangeCounter(t) {
    // Write your code here
    let cycleStart = 1;
    let counterValue = 3;
    
    while(t >= cycleStart + counterValue){
        cycleStart += counterValue;
        counterValue *= 2;
    }
    
    return counterValue - (t - cycleStart);
}
