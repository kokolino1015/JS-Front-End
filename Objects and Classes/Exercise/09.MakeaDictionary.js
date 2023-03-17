function solve(list) {
    let output = {}
    for (item of list) {
        json = JSON.parse(item)
        output[Object.keys(json)[0]] = Object.values(json)[0]
    }
    for (item of Object.entries(output).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))){
        console.log(`Term: ${item[0]} => Definition: ${item[1]}`)
    }
}