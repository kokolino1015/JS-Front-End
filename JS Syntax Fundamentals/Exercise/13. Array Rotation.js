function solve (list, rotations){
    while (rotations > 0){
        let item = list.shift();
        list.push(item)
        rotations -= 1;
    }
    console.log(list.join(' '))
}
solve([51, 47, 32, 61, 21], 2)