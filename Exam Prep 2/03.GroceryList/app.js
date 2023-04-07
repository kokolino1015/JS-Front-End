function solve() {
    const input = {
        productName: document.getElementById('product'),
        count: document.getElementById('count'),
        price: document.getElementById('price')
    }
    const addBtn = document.getElementById('add-product');
    const updateBtnInDiv = document.getElementById('update-product');
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const loadBtn = document.getElementById('load-product');
    const tbody = document.querySelector('.tbl-content>table>#tbody');
    let updatingId = null;
    addBtn.addEventListener('click', addHandler);
    loadBtn.addEventListener('click', loadHandler);
    updateBtnInDiv.addEventListener('click', updateHandler);

    function loadHandler(e) {
        e.preventDefault()
        fetch(BASE_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                tbody.innerHTML = '';
                for (const element in data) {
                    const tr = createElement('tr', '', tbody);
                    const tdName = createElement('td', data[element].product, tr, '', ['name']);
                    const tdCount = createElement('td', data[element].count, tr, '', ['count-product']);
                    const tdPrice = createElement('td', data[element].price, tr, '', ['product-price']);
                    const td = createElement('td', '', tr, '', ['btn']);
                    const updateBtn = createElement('button', 'Update', td, data[element]._id, ['update']);
                    const deleteBtn = createElement('button', 'Delete', td, data[element]._id, ['delete']);
                    updateBtn.addEventListener('click', () => {
                        input.productName.value = data[element].product;
                        input.count.value = data[element].count;
                        input.price.value = data[element].price;
                        updateBtnInDiv.disabled=false;
                        addBtn.disabled = true
                        updatingId = data[element]._id;
                    });
                    deleteBtn.addEventListener('click', (e) => {
                        const httpHandler = {
                            method: "DELETE"
                        }
                        fetch(BASE_URL + data[element]._id, httpHandler);
                        loadHandler(e)
                    });
                }
            })
    }

    function updateHandler(e) {
        const productNameValue = input.productName.value;
        const countValue = input.count.value;
        const priceValue = input.price.value;
        const httpHandler = {
            method: 'PATCH',
            body: JSON.stringify({
                'product': productNameValue, 'count': countValue, 'price': priceValue
            })
        }
        fetch(BASE_URL+updatingId, httpHandler);
        loadHandler(e);
        input.productName.value = '';
        input.count.value = '';
        input.price.value = '';
        addBtn.disabled = false
        updateBtnInDiv.disabled = true
    }

    function addHandler(e) {
        const productNameValue = input.productName.value;
        const countValue = input.count.value;
        const priceValue = input.price.value;
        const httpHandler = {
            method: 'POST',
            body: JSON.stringify({
                'product': productNameValue, 'count': countValue, 'price': priceValue
            })
        }
        fetch(BASE_URL, httpHandler);
        input.productName.value = '';
        input.count.value = '';
        input.price.value = '';
        loadHandler(e);
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

solve()