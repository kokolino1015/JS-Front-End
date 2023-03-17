function solve(list){
    let output = {}
    for (const listElement of list) {
        output[listElement] = listElement.length;
    }
    for (const outputKey in output) {
        console.log(`Name: ${outputKey} -- Personal Number: ${output[outputKey]}`)
    }
}

solve([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])