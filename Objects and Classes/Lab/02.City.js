function solve(object){
    for (const element in object) {
        console.log(`${element} -> ${object[element]}`)
    }
}

solve({

    name: "Plovdiv",

    area: 389,

    population: 1162358,

    country: "Bulgaria",
    postCode: "4000"
})