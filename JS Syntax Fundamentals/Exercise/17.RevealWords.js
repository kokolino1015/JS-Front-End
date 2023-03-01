function solve(word, input){
    let list = word.split(', ');
    let sentence = input.split(" ");
    for (let word of list){
        for (let i=0; i<sentence.length;i++){
            if(word.length === sentence[i].length && sentence[i] === "*".repeat(word.length)){
                sentence[i]= word;
            }
        }
    }
    console.log(sentence.join(' '))

}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages')