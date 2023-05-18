function getTotalX(a, b) {
    let potantial = [],
    final = [];
    for(let i = a[a.length - 1]; i <=  b[0]; i++){
        if(a.every(x => i % x === 0)) potantial.push(i);
    }
    for(let i = 0; i< potantial.length;i++){
        if(b.every(x => x % potantial[i] === 0)) final.push(potantial[i]);
    }
  
    return final.length;
}