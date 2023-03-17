function solve(list){
    let output = {};
    for (const outputKey of list) {
        [name, value] = outputKey.split(':');
        output[name] = value;
    }
    for (let key of Object.keys(output).sort()){
        console.log(`${key} -> ${output[key]}`)
    }
}

solve(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])
