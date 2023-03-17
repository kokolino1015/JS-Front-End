function solve(list) {
    let output = {}

    list.forEach(item => {
        if (!item.includes(' with email ')) {
            let [courseName, capacity] = item.split(': ')
            if (!output.hasOwnProperty(courseName)) {
                output[courseName] = {}
                output[courseName].capacity = 0
                output[courseName].users = []
            }
            output[courseName].capacity += parseInt(capacity)
        } else {
            let [userName, data] = item.split(' with email ')
            let [email, courseName] = data.split(' joins ')
            if (output.hasOwnProperty(courseName) && output[courseName].capacity > output[courseName].users.length) {
                [userName, credits] = userName.split('[')
                output[courseName].users.push({
                    name: userName, email: email, credits: parseInt(credits.replace(']', ''))
                })
            }
        }
    })

    Object.entries(output)
        .sort(([courseNameA, courseA], [courseNameB, courseB]) => courseB.users.length - courseA.users.length)
        .forEach(([courseName, course]) => {
            console.log(`${courseName}: ${course.capacity - course.users.length} places left`)
            course.users.sort((a, b) => b.credits - a.credits)
                .forEach(({credits, name, email}) => console.log(`--- ${credits}: ${name}, ${email}`))
        })
}