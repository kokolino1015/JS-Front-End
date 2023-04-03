function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const newOption = document.createElement('option');
    const menu = document.getElementById('menu');
    newOption.textContent = text.value;
    newOption.value = value.value;
    menu.appendChild(newOption);
    text.value = '';
    value.value = '';
}