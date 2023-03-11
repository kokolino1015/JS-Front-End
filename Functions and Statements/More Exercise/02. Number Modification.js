function solve(number) {
    function isAvgMoreThanFive(list) {
        let avg = 0;
        let counter = 0
        for (let num of list) {
            avg += Number(num);
            counter += 1;
        }
        return avg / counter > 5;
    }

    let list = number.toString().split('')
    while ( isAvgMoreThanFive(list) !== true){
        list.push('9')
    }
    return list.join('')
}
console.log(solve(5835))