window.addEventListener('load', solve);

function solve() {
    const formData = {
        title: '',
        description: '',
        label: '',
        estimatedPoints: '',
        assignee: ''
    }
    const inputFields = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        estimatedPoints: document.getElementById('points'),
        assignee: document.getElementById('assignee')
    }
    let deletingArticle = null;
    let pointsOnDelete = 0;
    const section = document.getElementById('tasks-section');
    const createBtn = document.getElementById('create-task-btn');
    const deleteBtn = document.getElementById('delete-task-btn');
    deleteBtn.addEventListener('click', deleteHandler)
    createBtn.addEventListener('click', createHandler)
    const totalPtsPlace = document.getElementById('total-sprint-points');
    let counter = 1;
    let pts = 0

    function createHandler() {
        for (const element in inputFields) {
            if (inputFields[element].value === '') {
                return
            }
        }
        const article = createElement('article', '', section, `task-${counter}`, ['task-card']);
        if (inputFields.label.value === 'Feature') {
            const div = createElement('div', `${inputFields.label.value}`, article, '', [`task-card-label`, `${inputFields.label.value.toLowerCase()}`])
            div.innerHTML += ' &#8865;'
        } else if (inputFields.label.value === 'Low Priority Bug') {
            const div = createElement('div', `${inputFields.label.value}`, article, '', [`task-card-label`, `low-priority`])
            div.innerHTML += ' &#9737;'
        } else {
            const div = createElement('div', `${inputFields.label.value}`, article, '', [`task-card-label`, `high-priority`])
            div.innerHTML += ' &#9888;'
        }
        const h3 = createElement('h3', inputFields.title.value, article, '', ['task-card-title'])
        const p = createElement('p', inputFields.description.value, article, '', ['task-card-description'])
        const div2 = createElement('div', `Estimated at ${inputFields.estimatedPoints.value} pts`, article, '', ['task-card-points'])
        pts += Number(inputFields.estimatedPoints.value);
        points()
        const div3 = createElement('div', `Assigned to: ${inputFields.assignee.value}`, article, '', ['task-card-assignee'])
        const div4 = createElement('div', '', article, '', ['task-card-actions'])
        const deleteBtn2 = createElement('button', 'Delete', div4);
        for (const field in inputFields) {
            formData[field] = inputFields[field].value
            inputFields[field].value = ''
        }
        deleteBtn2.addEventListener('click', () => {
            for (const field in inputFields) {
                inputFields[field].value = formData[field]
            }
            createBtn.disabled = true
            deleteBtn.disabled = false
            deletingArticle = article;
            let pointss = div2.textContent.split(' ')
            pointsOnDelete = Number(pointss[2])
            console.log(pointsOnDelete)
        })
        counter += 1
    }

    function deleteHandler() {
        deletingArticle.parentNode.removeChild(deletingArticle);
        pts -= pointsOnDelete;
        points()
        for (const field in inputFields) {
            inputFields[field].value = ''
        }
        createBtn.disabled = false
        deleteBtn.disabled = true
    }

    function points() {
        totalPtsPlace.textContent = `Total Points ${pts}pts`
    }

    function createElement(type, content, parentNode, id, classes, attrs) {
        const htmlElement = document.createElement(type);

        if (content && type !== 'input') {
            htmlElement.textContent = content;
        }

        if (content && type === 'input') {
            htmlElement.value = content;
        }

        if (id) {
            htmlElement.id = id;
        }

        if (classes) {
            htmlElement.classList.add(...classes);
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        if (attrs) {
            for (const key in attrs) {
                htmlElement.setAttribute(key, attrs[key]);
            }
        }

        return htmlElement;
    }
}

