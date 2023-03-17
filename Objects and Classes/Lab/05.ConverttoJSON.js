function solve(firstName, lastName, hairColor) {
    let person = {name: firstName, lastName, hairColor};
    return JSON.stringify(person)

}

solve('George', 'Jones','Brown')