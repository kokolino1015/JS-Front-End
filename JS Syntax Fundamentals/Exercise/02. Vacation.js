function solve(people, typeOfGroup,dayOfTheWeek) {
    let price;
    switch (dayOfTheWeek){
        case "Friday":
            if(typeOfGroup === "Students"){
                price = 8.45 * people;
                if(people >=30){
                    price *= 0.85;
                }
            } else if(typeOfGroup === "Business"){
                price = 10.9 * people;
                if(people>=100){
                    price -= 10*10.9;
                }
            }else{
                price = 15 * people;
                if(people >= 10 && people <=20){
                    price *= 0.95;
                }
            }
            break
        case "Saturday":
            if(typeOfGroup === "Students"){
                price = 9.8 * people;
                if(people >=30){
                    price *= 0.85;
                }
            } else if(typeOfGroup === "Business"){
                price = 15.6 * people;
                if(people>=100){
                    price -= 10*15.6;
                }
            }else{
                price = 20 * people;
                if(people >= 10 && people <=20){
                    price *= 0.95;
                }
            }
            break
        case "Sunday":
            if(typeOfGroup === "Students"){
                price = 10.46 * people;
                if(people >=30){
                    price *= 0.85;
                }
            } else if(typeOfGroup === "Business"){
                price = 16 * people;
                if(people>=100){
                    price -= 10*16;
                }
            }else{
                price = 22.5 * people;
                if(people >= 10 && people <=20){
                    price *= 0.95;
                }
            }
            break
    }
    console.log(`Total price: ${price.toFixed(2)}`)

}