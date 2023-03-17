function solve(list){

    for (const listElement of list) {
        let [town, latitude, longitude] = listElement.split(' | ');
        let output = {town, latitude:`${Number(latitude).toFixed(2)}`, longitude:`${Number(longitude).toFixed(2)}`};
        console.log(output)
    }
}
solve(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])