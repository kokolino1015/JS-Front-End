function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.getElementById('load-board-btn');
    loadBtn.addEventListener('click', loadHandler)
    const inProgressPlace = document.querySelector('#in-progress-section>.task-list');
    const donePlace = document.querySelector('#done-section>.task-list');
    const todoPlace = document.querySelector('#todo-section>.task-list');
    const codeReviewPlace = document.querySelector('#code-review-section>.task-list');
    const addBtn = document.getElementById('create-task-btn');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    addBtn.addEventListener('click', addHandler)
    function loadHandler() {
        fetch(BASE_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                todoPlace.innerHTML = '';
                inProgressPlace.innerHTML = '';
                codeReviewPlace.innerHTML = '';
                donePlace.innerHTML = '';
                for (const dataKey in data) {
                    if (data[dataKey].status === 'ToDo') {
                        const li = createElement('li', '', todoPlace, '', ['task'])
                        const h3 = createElement('h3', data[dataKey].title, li);
                        const p = createElement('p', data[dataKey].description, li);
                        const btn = createElement('button', 'Move to In Progress', li);
                        btn.id = data[dataKey]._id;
                        btn.title = data[dataKey].title;
                        btn.description = data[dataKey].description;
                        btn.targetLocation = 'in progress'
                        btn.addEventListener('click', move)
                    } else if (data[dataKey].status === 'In Progress') {
                        const li = createElement('li', '', inProgressPlace, '', ['task'])
                        const h3 = createElement('h3', data[dataKey].title, li);
                        const p = createElement('p', data[dataKey].description, li);
                        const btn = createElement('button', 'Move to Code Review', li);
                        btn.id = data[dataKey]._id;
                        btn.title = data[dataKey].title;
                        btn.description = data[dataKey].description;
                        btn.targetLocation = 'code review'
                        btn.addEventListener('click', move)
                    } else if (data[dataKey].status === 'Code Review') {
                        const li = createElement('li', '', codeReviewPlace, '', ['task'])
                        const h3 = createElement('h3', data[dataKey].title, li);
                        const p = createElement('p', data[dataKey].description, li);
                        const btn = createElement('button', 'Move to Done', li);
                        btn.id = data[dataKey]._id;
                        btn.title = data[dataKey].title;
                        btn.description = data[dataKey].description;
                        btn.targetLocation = 'done'
                        btn.addEventListener('click', move)
                    } else if (data[dataKey].status === 'Done') {
                        const li = createElement('li', '', donePlace, '', ['task'])
                        const h3 = createElement('h3', data[dataKey].title, li);
                        const p = createElement('p', data[dataKey].description, li);
                        const btn = createElement('button', 'Close', li);
                        btn.id = data[dataKey]._id;
                        btn.title = data[dataKey].title;
                        btn.description = data[dataKey].description;
                        btn.addEventListener('click', deleteHandler)
                    }
                }
            })
    }
    function move(){
        const titleValue = this.title;
        const descriptionValue = this.description;
        if( this.targetLocation === 'in progress'){
            const httpHandler = {
                method: 'PATCH',
                body:JSON.stringify({
                    'title':titleValue,
                    'description':descriptionValue,
                    'status': 'In Progress'
                })
            }
            fetch(BASE_URL+this.id, httpHandler)
            loadHandler()
        } else if(this.targetLocation === 'code review'){
            const httpHandler = {
                method: 'PATCH',
                body:JSON.stringify({
                    'title':titleValue,
                    'description':descriptionValue,
                    'status': 'Code Review'
                })
            }
            fetch(BASE_URL+this.id, httpHandler)
            loadHandler()
        } else if(this.targetLocation === 'done'){
            const httpHandler = {
                method: 'PATCH',
                body:JSON.stringify({
                    'title':titleValue,
                    'description':descriptionValue,
                    'status': 'Done'
                })
            }
            fetch(BASE_URL+this.id, httpHandler)
            loadHandler()
        }

    }
    function deleteHandler(){
        const httpHandler = {
            method:'DELETE',
        }
        fetch(BASE_URL+this.id, httpHandler);
        loadHandler()

    }
    function addHandler(){
        const titleValue = title.value;
        const descriptionValue = description.value;
        const status = 'ToDo';
        const httpHandler = {
            method:'POST',
            body:JSON.stringify({
                'title':titleValue,
                'description':descriptionValue,
                'status':status
            })
        }
        fetch(BASE_URL, httpHandler);
        loadHandler()
        title.value = '';
        description.value = '';
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

attachEvents();