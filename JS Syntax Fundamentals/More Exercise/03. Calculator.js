function solve(number, operator, number2){
    let result;
    switch (operator){
        case '+':
            result = number +number2;
            break
        case '/':
            result = number / number2;
            break
        case '-':
            result = number - number2;
            break
        case '*':
            result = number * number2;
            break
    }
    console.log(`${result.toFixed(2)}`)
}