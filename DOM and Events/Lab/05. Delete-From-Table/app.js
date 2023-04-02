function deleteByEmail() {
    const result = document.getElementById('result');
    const input = document.querySelector('input[name="email"]');
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const emailValue = input.value;
    const foundElement = evenTds.find((td) => td.textContent === emailValue)
    if (foundElement){
        foundElement.parentElement.remove();
        result.textContent = 'Deleted.'
    }
    else {
        result.textContent = 'Not found.'
    }

}