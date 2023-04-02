function addItem() {
    const result = document.getElementById('newItemText');
    const parent = document.getElementById('items');
    const resultLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    newAnchor.textContent = '[Delete]';
    newAnchor.setAttribute('href', '#');
    newAnchor.addEventListener('click', deleteHandler);
    resultLi.textContent = result.value;
    resultLi.appendChild(newAnchor);
    parent.appendChild(resultLi);
    result.value = '';
    function deleteHandler(e) {
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }

}