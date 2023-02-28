function solve(speed, place) {
    let speedLimit = 0;
    let underLimit = true;
    switch (place) {
        case 'motorway':
            speedLimit = 130
            if (speed > 130) {
                underLimit = false;
            }
            break
        case 'interstate':
            speedLimit = 90;
            if (speed > 90) {
                underLimit = false;
            }
            break
        case 'city':
            speedLimit = 50;
            if (speed > 50) {
                underLimit = false;
            }
            break
        case 'residential':
            speedLimit = 20;
            if (speed > 20) {
                underLimit = false;
            }
            break
    }
    if (underLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        if (speed - speedLimit <= 20) {
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`)
        } else if (speed - speedLimit <= 40) {
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
        } else {
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
        }
    }
}