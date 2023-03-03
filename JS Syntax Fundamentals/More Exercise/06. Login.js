function solve(list) {
    let counter = 0;
    let password = list[0].split("").reverse().join("");
    for (let i = 1;i<list.length; i++){
        if (list[i] === password){
            console.log(`User ${list[0]} logged in.`);
        } else {
            counter += 1;
            if(counter === 4){
                console.log(`User ${list[0]} blocked!`)
                return
            }
            console.log("Incorrect password. Try again.");
        }
    }
}
solve(['sunny','rainy','cloudy','sunny','not sunny'])