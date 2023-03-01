function solve(list, step) {
    let newList = [];
    for (let i=0; i <= list.length; i += step) {
        newList.push(list[i]);
    }
    console.log(newList)
}

solve(['5','20', '31','4','20'],2)