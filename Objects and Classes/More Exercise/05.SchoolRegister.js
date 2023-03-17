function solve(list){
    schoolBook = {}

    for (item of list) {
        let [name, grade, avrScore] = item.split(', ')
        name = name.split(': ')[1]
        grade = parseInt(grade.split(': ')[1])
        avrScore = parseFloat(avrScore.split(': ')[1])
        if (avrScore >= 3){
            grade += 1
            if (!schoolBook.hasOwnProperty(grade)){
                schoolBook[grade] = {}
                schoolBook[grade].studetns = []
                schoolBook[grade].totalScore = 0
            }
            schoolBook[grade].studetns.push(name)
            schoolBook[grade].totalScore += avrScore
        }
    }
    for (classLvl of Object.entries(schoolBook)){
        console.log(`${classLvl[0]} Grade`)
        console.log(`List of students: ${classLvl[1].studetns.join(', ')}`)
        console.log(`Average annual score from last year: ${(classLvl[1].totalScore / classLvl[1].studetns.length).toFixed(2)}\n`)
    }
}