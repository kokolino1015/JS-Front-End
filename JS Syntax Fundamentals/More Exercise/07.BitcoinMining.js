function solve(list) {
    let budget = 0;
    let bitcoins = 0;
    let counter = 0;
    let firstPurchase = 0;
    for (let i = 0; i < list.length; i++) {
        counter += 1
        if (counter % 3 === 0) {
            budget += (0.7 * list[i]) * 67.51;
        } else {
            budget += list[i] * 67.51;
        }

        while (budget >= 11949.16) {
            budget -= 11949.16;
            if (bitcoins === 0) {
                firstPurchase = counter;
            }
            bitcoins += 1
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`)
    if (firstPurchase !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`)

    }
    console.log(`Left money: ${budget.toFixed(2)} lv.`)
}

solve([3124.15, 504.212, 2511.124])