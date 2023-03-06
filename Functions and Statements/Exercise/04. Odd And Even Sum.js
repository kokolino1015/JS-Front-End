function solve(num){
    let result = num.toString()
    let oddSum = 0;
    let evenSum = 0;
    for (let i =0; i<=result.length - 1; i++){
        if (parseInt(result[i])%2===0){
            evenSum += parseInt(result[i]);
        } else {
            oddSum += parseInt(result[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
solve(1000435)

