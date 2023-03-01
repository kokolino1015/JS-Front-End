function solve(list) {
    let newList = [];
    let counter = 0;
    let lengthNewList = list.length;
    while (counter < lengthNewList) {
        if (counter % 2 === 0) {
            let element = Math.min.apply(Math, list);
            let place = list.indexOf(element);
            newList.push(element);
            list.splice(place, 1);
        } else if (
            counter % 2 !== 0
        ) {
            let element = Math.max.apply(Math, list);
            let place = list.indexOf(element);
            newList.push(element);
            list.splice(place, 1);
        }
        counter += 1;
    }
    return newList;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])