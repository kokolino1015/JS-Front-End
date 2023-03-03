function solve(input) {
    const regex = /\b\w+\b/g;
    let result = input.match(regex) || [];
    let resultLog = result.map(word => word.toUpperCase());
    console.log(resultLog.join(', '));
}

solve('Hi, how are you?')