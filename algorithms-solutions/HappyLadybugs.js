function happyLadybugs(b) {
    let counts = {};  
    let hasEmpty = false;

    for (let char of b) {
        if (char === '_') {
            hasEmpty = true;
        } else {
            counts[char] = (counts[char] || 0) + 1;
        }
    }

    for (let count of Object.values(counts)) {
        if (count === 1) return "NO";
    }

    if (hasEmpty) return "YES";

    for (let i = 1; i < b.length - 1; i++) {
        if (b[i] !== b[i - 1] && b[i] !== b[i + 1]) {
            return "NO";
        }
    }

    return "YES";
}
