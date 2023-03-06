function solve(start, end) {
    let list = [];
    let startOrd = start.charCodeAt(0);
    let endOrd = end.charCodeAt(0);
    for (let i = Math.min(startOrd, endOrd) + 1; i <= Math.max(startOrd, endOrd) - 1; i++) {
        list.push(String.fromCharCode(i))
    }
    console.log(list.join(' '))
}

solve('C', '#')