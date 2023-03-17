function solve(list) {
    let output = {}

    for (item of list) {
        if (item.includes('addMovie')) {
            let name = item.split('addMovie ')[1]
            output[name] = {}
            output[name].name = name
        } else if (item.includes('directedBy')) {
            let [nameMovie, nameDirector] = item.split(' directedBy ')
            if (nameMovie in output) {
                output[nameMovie].director = nameDirector
            }
        } else if (item.includes('onDate')) {
            let [nameMovie, date] = item.split(' onDate ')
            if (nameMovie in output) {
                output[nameMovie].date = date
            }
        }
    }
    let outputRdy = []
    for (let [key, value] of Object.entries(output)){
        if (Object.keys(output[key]).length !== 3){
            delete output[key]
        } else {
            outputRdy.push(value)
            console.log(JSON.stringify(value))
        }
    }
}