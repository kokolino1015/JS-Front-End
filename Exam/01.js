function solve(list) {
    let participants = {}
    const lines = list.shift();
    for (let x = 0; x < lines; x++) {
        let data = list.shift().split(':');
        if (!participants.hasOwnProperty(data[0])){
            participants[data[0]] = {
                task: []
            }
        }
        let length = participants[data[0]].task.length;
        participants[data[0]].task[length] = [data[1], data[2], data[3], data[4]]

    }

    for (const line of list) {
        const data = line.split(':');
        const command = data[0];
        if (command === 'Add New') {
            add(data[1], data[2], data[3], data[4], data[5])
        } else if (command === 'Change Status') {
            change(data[1], data[2], data[3])
        } else if (command === 'Remove Task') {
            remove(data[1], data[2])
        }
    }
    let inProgress = 0;
    let codeReview = 0;
    let done = 0;
    let todo = 0;
    for (const assignee in participants) {
        for (const task of participants[assignee].task) {
            if (task[2] === 'Code Review'){
                codeReview += Number(task[3]);
            }else if(task[2] === 'In Progress'){
                inProgress += Number(task[3]);
            } else if(task[2] === 'ToDo'){
                todo +=Number(task[3]);
            } else if(task[2] === 'Done'){
                done += Number(task[3]);
            }
        }
    }
    console.log(`ToDo: ${todo}pts\nIn Progress: ${inProgress}pts\nCode Review: ${codeReview}pts\nDone Points: ${done}pts`)
    if (done >= inProgress + codeReview+todo){
        console.log('Sprint was successful!')
    }else {
        console.log('Sprint was unsuccessful...')
    }
    function add(assignee, taskId, title, status, estimatedPoints) {
        if (participants.hasOwnProperty(assignee)) {
            let taskValue = participants[assignee].task;
            taskValue[taskValue.length] = [taskId, title, status, estimatedPoints];
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        }
    }

    function change(assignee, taskId, newStatus) {
        let isFound = false;
        if (participants.hasOwnProperty(assignee)) {
            let counter = 0
            for (let tasks of participants[assignee].task) {
                if (tasks.includes(taskId)) {
                    let [taskId, title, status, estimatedPoints] = tasks;
                    participants[assignee].task[counter] = [taskId, title, newStatus, estimatedPoints];
                    isFound = true;
                    break
                }
                counter += 1;
            }
            if (!isFound) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        }
    }

    function remove(assignee, number) {
        let counter = 0;
        let index = Number(number);
        if (participants.hasOwnProperty(assignee)) {
            if (participants[assignee].task.length - 1 < index) {
                console.log("Index is out of range!");
            } else {
                for (const task of participants[assignee].task) {
                    if (counter === index) {
                        let curIndex = participants[assignee].task.indexOf(task);
                        participants[assignee].task.splice(curIndex, 1);
                        break
                    }
                    counter += 1;
                }
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        }

    }
}

solve([
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
)
console.log(Number(true))