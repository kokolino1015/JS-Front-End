function solve() {
    const input = document.getElementById('input');
    const result = document.getElementById('output');
    const button = document.getElementById('formatItBtn');
    button.addEventListener('click', format)

    function format() {
        const sentenceList = input.value.split('.').filter((el) => el !== '');
        while (sentenceList.length > 0) {
            const threeSentences = sentenceList.splice(0, 3);
            const newP = document.createElement('p');
            newP.textContent = threeSentences.join('.') + '.';
            result.appendChild(newP);
        }
        input.value = '';
    }
}