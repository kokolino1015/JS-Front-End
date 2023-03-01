function solve(searchedWord, text){
    let input = text.split(' ')
    for(let word of input){
        if(word.toLowerCase() === searchedWord.toLowerCase()){
            console.log(searchedWord)
            return
        }
    }
    console.log(`${searchedWord} not found!`)
}
solve('javascript', 'JavaScript is the best programming language')