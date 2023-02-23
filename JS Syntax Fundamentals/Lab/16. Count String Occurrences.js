function solve(string, searchedWord) {
    let words = string.split(' ');
    let counter = 0;
    for (let word of words) {
        if (word.toLowerCase() === searchedWord.toLowerCase()) {
            counter++;
        }
    }
    console.log(counter)
}