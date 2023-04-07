function solve(list) {
    let elements = list[0].split('!');
    for (let i = 1; i < list.length; i++) {
        let data = list[i].split(' ');
        let command = data[0];
        if (command === 'Urgent') {
            Urgent(data[1]);
        } else if (command === 'Unnecessary') {
            Unnecessary(data[1]);
        } else if (command === 'Correct') {
            Correct(data[1], data[2]);
        } else if (command === 'Rearrange') {
            Rearrange(data[1]);
        }
    }
    console.log(elements.join(', '))

    function Urgent(item) {
        if (!elements.includes(item)) {
            elements.unshift(item);
        }
    }

    function Unnecessary(item) {
        if (elements.includes(item)) {
            const itemIndex = elements.indexOf(item);
            elements.splice(itemIndex, 1);
        }
    }

    function Correct(oldItem, newItem) {
        if (elements.includes(oldItem)) {
            let index = elements.indexOf(oldItem);
            elements[index] = newItem;
        }
    }

    function Rearrange(item) {
        if (elements.includes(item)) {
            const itemIndex = elements.indexOf(item);
            const itemName = elements[itemIndex];
            elements.splice(itemIndex, 1);
            elements.push(itemName);
        }
    }
}
