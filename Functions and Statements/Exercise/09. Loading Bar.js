function solve(progress){
    if (progress !== 100){
        let barPro = "%".repeat(progress/10);
        let barPo = ".".repeat(10 - progress/10)
        console.log(`${progress}% [${barPro + barPo}]`)
        console.log("Still loading...")
    } else {
        console.log("100% Complete!")
        console.log("[%%%%%%%%%%]")
    }
}