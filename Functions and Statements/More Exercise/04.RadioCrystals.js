function solve(list){
    for (let n=1;n< list.length; n++) {
        let target = list[0];
        let differentChunks = list[n];
        let start = list[n];
        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let xRay = 0;
        while (differentChunks / 4 >= target) {
            differentChunks /= 4;
            cut += 1;
        }
        differentChunks = Math.floor(differentChunks);
        while (differentChunks * 0.8 >= target) {
            differentChunks *= 0.8;
            lap += 1;
        }
        differentChunks = Math.floor(differentChunks);
        while (differentChunks - 20 >= target) {
            differentChunks -= 20;
            grind += 1;
        }
        differentChunks = Math.floor(differentChunks);
        while (differentChunks - 2 >= target || differentChunks - 2 >= target - 1) {
            differentChunks -= 2;
            etch += 1;
        }
        differentChunks = Math.floor(differentChunks);
        if (differentChunks + 1 === target) {
            xRay += 1
            differentChunks += 1;
        }
        console.log(`Processing chunk ${start} microns`)
        if (cut > 0) {
            console.log(`Cut x${cut}`)
            console.log(`Transporting and washing`)
        }
        if (lap > 0) {
            console.log(`Lap x${lap}`)
            console.log(`Transporting and washing`)
        }
        if (grind > 0) {
            console.log(`Grind x${grind}`)
            console.log(`Transporting and washing`)
        }
        if (etch > 0) {
            console.log(`Etch x${etch}`)
            console.log(`Transporting and washing`)
        }
        if (xRay !== 0) {
            console.log(`X-ray x${xRay}`)
        }
        console.log(`Finished crystal ${differentChunks} microns`)
    }
}
// solve([1375, 50000])
solve([1000, 4000, 8100])