function attachEvents() {
    const GET_AND_POST_URL = 'http://localhost:3030/jsonstore/collections/books';
    const EDIT_AND_DELETE_URL = 'http://localhost:3030/jsonstore/collections/books/';
    const loadAllBooksBtn = document.getElementById('loadBooks');
    const tbody = document.getElementsByTagName('tbody')[0];
    const inputTitle = document.getElementsByName('title')[0];
    const inputAuthor = document.getElementsByName('author')[0];
    const createBtn = document.querySelector('#form button');
    const headingOfForm = document.getElementsByTagName('h3')[0];
    let editBookId = null;

    loadAllBooksBtn.addEventListener('click', loadHandler);
    createBtn.addEventListener('click', createHandler)


    function loadHandler() {
        tbody.innerHTML = '';
        fetch(GET_AND_POST_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (const dataKey in data) {
                    const {author, title} = data[dataKey];
                    const tr = document.createElement('tr');
                    const tdAuthor = document.createElement('td');
                    tdAuthor.textContent = author;
                    const tdTitle = document.createElement('td');
                    tdTitle.textContent = title;
                    const buttons = document.createElement('td');
                    const editButton = document.createElement('button');
                    editButton.textContent = 'Edit';
                    editButton.id = dataKey;
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.id = dataKey;
                    editButton.addEventListener('click', () => {
                        editBookId = dataKey;
                        headingOfForm.textContent = 'Edit FORM';
                        inputTitle.value = title;
                        inputAuthor.value = author;
                        createBtn.textContent = 'Save';
                    });
                    deleteButton.addEventListener('click', deleteHandler);
                    buttons.appendChild(editButton);
                    buttons.appendChild(deleteButton)
                    tr.appendChild(tdTitle);
                    tr.appendChild(tdAuthor);
                    tr.appendChild(buttons);
                    tbody.appendChild(tr);
                }
            })
    }


    function deleteHandler() {
        const httpHandler = {
            method: "DELETE"
        }
        fetch(`${EDIT_AND_DELETE_URL}${this.id}`, httpHandler);
    }

    function createHandler() {
        const title = inputTitle.value;
        const author = inputAuthor.value;
        const httpHandler = {
            method: 'POST',
            body: JSON.stringify({
                'title': title,
                'author': author
            })
        }
        let url = GET_AND_POST_URL;
        if (headingOfForm.textContent === 'Edit FORM') {
            httpHandler.method = 'PUT';
            url += editBookId;
        }

        fetch(url, httpHandler);
        loadHandler()
        if (headingOfForm.textContent === 'Edit FORM'){
            headingOfForm.textContent = 'FORM';
            createBtn.textContent = 'Submit';
        }
        inputTitle.value = '';
        inputAuthor.value = '';
    }
}

attachEvents();