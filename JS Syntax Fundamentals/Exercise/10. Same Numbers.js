function solve(num) {
    let number = num.toString();
    let isTrue = true;
    let firstNum = number[0];
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (firstNum !== number[i]) {
            isTrue = false;
        }
        sum += Number(number[i]);
    }
    if(isTrue){
        console.log('true');
    } else {
        console.log("false");
    }
    console.log(sum);

}
solve(2222222)
