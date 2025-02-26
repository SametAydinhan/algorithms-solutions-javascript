function serviceLane(n, cases, width) {
    // Write your code here
    let results = [];
    cases.map((arr) => {
        let smallestNum = Infinity;
        for(let i = arr[0]; i <= arr[1]; i++){
            if(smallestNum > width[i]){
                smallestNum = width[i];
            }
        }
        results.push(smallestNum);
    })
    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const width = readLine().replace(/\s+$/g, '').split(' ').map(widthTemp => parseInt(widthTemp, 10));

    let cases = Array(t);

    for (let i = 0; i < t; i++) {
        cases[i] = readLine().replace(/\s+$/g, '').split(' ').map(casesTemp => parseInt(casesTemp, 10));
    }

    const result = serviceLane(n, cases, width);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
