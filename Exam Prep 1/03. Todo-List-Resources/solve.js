function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const input = document.getElementById('title');
    const addBtn = document.getElementById('add-button');
    const ulTodoList = document.getElementById('todo-list');
    const loadBtn = document.getElementById('load-button');
    addBtn.addEventListener('click', addHandler);
    loadBtn.addEventListener('click', loadHandler)

    function loadHandler(e) {
        e.preventDefault()
        fetch(BASE_URL)
            .then((response) => {
                e.preventDefault()
                return response.json()
            })
            .then((data) => {
                ulTodoList.innerHTML = '';
                for (const element in data) {
                    const li = document.createElement('li');
                    li.id = data[element]._id;
                    const span = document.createElement('span');
                    span.textContent = data[element].name;
                    const editBtn = document.createElement('button');
                    editBtn.id = data[element]._id;
                    editBtn.textContent = 'Edit';
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Remove';
                    deleteBtn.id = data[element]._id;
                    li.appendChild(span);
                    li.appendChild(deleteBtn);
                    li.appendChild(editBtn);
                    ulTodoList.appendChild(li);
                    editBtn.addEventListener('click', (e) => {
                        if (editBtn.textContent === 'Edit') {
                            const input = document.createElement('input');
                            input.value = data[element].name;
                            li.appendChild(input);
                            li.replaceChild(input, span);
                            editBtn.textContent = 'Submit';
                        } else {
                            const input = document.querySelector('ul>li>input')
                            const span = document.createElement('span');
                            span.textContent = input.value;
                            li.appendChild(span);
                            li.replaceChild(span, input);
                            const httpHeaders = {
                                method: "PATCH",
                                body: JSON.stringify({
                                    'name': span.textContent
                                })
                            }
                            editBtn.textContent = 'Edit';
                            fetch(BASE_URL + li.id, httpHeaders).then(() => {
                                loadHandler(e)
                            });
                        }

                    });
                    deleteBtn.addEventListener('click', (e) => {
                        const httpHandler = {
                            method: 'DELETE'
                        }
                        fetch(BASE_URL + li.id, httpHandler).then(() => {
                            loadHandler(e)
                        });
                    });

                }
            })
    }

    function addHandler(e) {
        e.preventDefault();
        const httpHandler = {
            method: "POST",
            body: JSON.stringify({
                'name': input.value
            })
        }
        fetch(BASE_URL, httpHandler).then(() => {
            loadHandler(e);
        });
        input.value = '';
    }
}

attachEvents();
