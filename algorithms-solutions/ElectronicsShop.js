function getMoneySpent(keyboards, drives, b) {
    var mostPrice = -1;
    for(const keyboard in keyboards){
        for(const drive in drives){
            if(keyboards[keyboard] + drives[drive] > mostPrice && keyboards[keyboard] + drives[drive] <= b){
                mostPrice = keyboards[keyboard] + drives[drive];
            }
        }
    }
    return mostPrice;
}