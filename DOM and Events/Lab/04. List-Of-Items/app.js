function addItem() {
    const result = document.getElementById('newItemText');
    const parent = document.getElementById('items');
    const resultLi = document.createElement('li');
    resultLi.textContent = result.value;
    parent.appendChild(resultLi);
    result.value = '';
}