function solve(list){
    let schedule = {};
    for (const listElement of list) {
        let el = listElement.split(' ');
        if (el[0] in schedule) {
            console.log(`Conflict on ${el[0]}!`)

        } else {
            schedule[el[0]] = el[1];
            console.log(`Scheduled for ${el[0]}`)
        }
    }
    for (let [key, value] of Object.entries(schedule)){
        console.log(`${key} -> ${value}`)
    }
}
solve(['Friday Bob',

    'Saturday Ted',

    'Monday Bill',

    'Monday John',

    'Wednesday George'])