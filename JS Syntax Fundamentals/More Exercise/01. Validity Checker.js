function solve(x1, y1, x2, y2) {
    function isValid(x1, y1, x2, y2) {
        let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        if (Number.isInteger(result)) {
            return "valid"
        } else {
            return "invalid"
        }
    }
    let distance1 = isValid(x1, y1 , 0, 0);
    let distance2 = isValid(x2, y2 , 0, 0);
    let distance3 = isValid(x1, y1 , x2, y2);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${distance1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${distance2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distance3}`);
}
solve(2,1,1,1)