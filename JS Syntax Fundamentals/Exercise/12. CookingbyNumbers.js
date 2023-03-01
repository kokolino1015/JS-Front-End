function solve(number, operator1, operator2, operator3, operator4, operator5) {
    let mainNumber = Number(number);
    let list = [operator1, operator2, operator3, operator4, operator5]
    for (let action of list) {
        switch (action) {
            case "chop":
                mainNumber /= 2;
                break
            case "dice":
                mainNumber = Math.sqrt(mainNumber);
                break
            case "spice":
                mainNumber += 1;
                break
            case "bake":
                mainNumber *= 3;
                break
            case "fillet":
                mainNumber *= 0.8;

                break
        }
        console.log(mainNumber);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')