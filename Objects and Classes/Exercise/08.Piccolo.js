function solve(input) {
    const parkedCars = new Set()

    for (item of input) {
        let [direction, carNumber] = item.split(', ')
        if (direction === "IN") {
            parkedCars.add(carNumber)
        } else {
            parkedCars.delete(carNumber)
        }
    }

    if (parkedCars.size === 0) {
        console.log("Parking Lot is Empty")
    } else {
        console.log([...parkedCars].sort().join("\n"))
    }
}