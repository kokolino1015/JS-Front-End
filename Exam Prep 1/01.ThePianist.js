function solve(list) {
    let number = Number(list.shift());
    let pieces = {}

    for (let n = 0; n < number; n++) {
        const [piece, composer, key] = list.shift().split('|');
        pieces[piece] = {piece, composer, key};
    }
    for (const command of list) {
        let data = command.split("|");
        let action = data[0];
        if (action === 'Add') {
            add(data[1], data[2], data[3]);
        } else if (action === 'Remove') {
            remove(data[1]);
        } else if (action === 'ChangeKey') {
            change(data[1], data[2]);
        }
    }
    for (const piecesKey in pieces) {
        console.log(`${piecesKey} -> Composer: ${pieces[piecesKey].composer}, Key: ${pieces[piecesKey].key}`)
    }

    function add(piece, composer, key) {
        if (piece in pieces) {
            console.log(`${piece} is already in the collection!`)
        } else {
            pieces[piece] = {piece, composer, key};
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        }
    }

    function remove(piece) {
        if (piece in pieces) {
            console.log(`Successfully removed ${piece}!`)
            delete pieces[piece];
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

    function change(piece, newKey) {
        if (piece in pieces) {
            console.log(`Changed the key of ${piece} to ${newKey}!`)
            pieces[piece].key = newKey;
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }
}

solve(
    [
        "4",
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'])