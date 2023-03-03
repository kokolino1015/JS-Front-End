function solve(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let swordExpense = Math.floor(lostFightCount / 3) * swordPrice;
    let helmetExpense = Math.floor(lostFightCount / 2) * helmetPrice;
    let shieldExpense = Math.floor(lostFightCount / 6) * shieldPrice
    let armorExpense =  Math.floor(lostFightCount / 12) * armorPrice;
    let result = shieldExpense + swordExpense + helmetExpense + armorExpense;
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`)
}

solve(7,

    2,

    3,

    4,

    5)