function angryProfessor(k, a) {
    let arrivedCounter = 0;
    a.forEach((arrivedTime) => {
        if(arrivedTime <= 0){
            arrivedCounter++;
        }
    })
    return arrivedCounter >= k ? "NO" : "YES";
}