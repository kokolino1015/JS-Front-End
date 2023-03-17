function solve(list) {
    list = list.map(el => JSON.parse(el))
    list.forEach(el => el.sort((a, b) => b - a))
    let output = []

    for (let i = 0; i < list.length; i++) {
        let currentList = list[i]
        let isUnique = true

        for (let j = 0; j < output.length; j++) {
            let nextList = output[j]
            if (nextList.toString() === currentList.toString()) {
                isUnique = false
                break
            }
        }
        if (isUnique) {
            output.push(currentList)
        }
    }
    output.sort((a, b) => a.length - b.length)
    output.forEach(el => console.log(`[${el.join(', ')}]`))
}
