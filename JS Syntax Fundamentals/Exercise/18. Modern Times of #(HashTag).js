function solve(input){
    let list = input.split(' ');
    let solution = [];
    for (let word of list){
        if (word.includes('#') && word.length > 1 && /^#[a-zA-Z]+$/.test(word)){
            let element = word.replace('#', '');
            solution.push(element)
        }
    }
    for(let word of solution){
        console.log(word)
    }

}