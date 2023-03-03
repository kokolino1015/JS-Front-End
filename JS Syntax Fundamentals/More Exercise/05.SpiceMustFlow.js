function solve(startingYield) {
    let days = 0;
    let result = 0;
    while (startingYield >= 100) {
        days += 1;
        result += startingYield - 26;

        startingYield -= 10;
    }
    if (result >= 26){
        result -= 26;
    } else {
        result = 0;
    }
    console.log(days)
    console.log(result)

}

solve(450)