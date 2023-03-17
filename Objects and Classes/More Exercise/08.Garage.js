function solve(list) {
    let garage = {}
    for (carIndo of list) {
        parts = carIndo.split(" - ")
        garageNum = parts[0]
        if (!garage.hasOwnProperty(garageNum)) {
            garage[garageNum] = {}
            garage[garageNum].cars = []
        }
        obj = {}
        parts[1].split(", ").forEach(pair => {
            const [key, value] = pair.split(": ")
            obj[key] = value
        })
        garage[garageNum].cars.push(obj)
    }
    for (let key in garage) {
        console.log(`Garage № ${key}`)
        let cars = garage[key].cars
        for (let car of cars) {
            const properties = []
            for (let property in car) {
                properties.push(`${property} - ${car[property]}`)
            }
            console.log(`--- ${properties.join(', ')}`)
        }

    }
}