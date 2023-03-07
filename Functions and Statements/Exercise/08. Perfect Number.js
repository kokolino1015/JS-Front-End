function solve(number) {
    let temp = 0;
    for (let n = 0; n < number; n++) {
        if (number % n === 0) {
            temp += n;
        }

    }
    if (temp === number && temp !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

solve(6)