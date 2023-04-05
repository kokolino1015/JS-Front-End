function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';
    const btnLoad = document.getElementById('btnLoad');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    const phoneBook = document.getElementById('phonebook');
    const btnCreate = document.getElementById('btnCreate');
    btnCreate.addEventListener('click', createHandler);
    btnLoad.addEventListener('click', LoadHandler);
    function LoadHandler() {
        fetch(BASE_URL)
            .then((response) => {return response.json()})
            .then((data) => {
                phoneBook.innerHTML = '';
                for (const dataKey in data) {
                    const li = document.createElement('li');
                    const button = document.createElement('button');
                    button.id = data[dataKey]._id;
                    button.addEventListener('click', deleteHandler)
                    button.textContent = 'Delete'
                    li.textContent = `${data[dataKey].person}: ${data[dataKey].phone}`;
                    li.appendChild(button);
                    phoneBook.appendChild(li);
                }
            })
    }
    function createHandler(){
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                "person": person.value,
                "phone": phone.value,
            })
        }
        fetch(BASE_URL, httpHeaders);
        LoadHandler()
    }
    async function deleteHandler () {
        const handler = {
            method : 'DELETE'
        };
        fetch(`http://localhost:3030/jsonstore/phonebook/${this.id}`, handler)
        await LoadHandler()
    }
}

attachEvents();