function sockMerchant(n, ar) {
    const countMap = ar.reduce((item,val) => {
        item[val] = (item[val] || 0) + 1; 
        return item;
    }, {})
    let again = 0;
    for(const key in countMap){
        if(countMap[key] >= 2){
            again += Math.floor(countMap[key]/2);
        }
    }
    return again;
}