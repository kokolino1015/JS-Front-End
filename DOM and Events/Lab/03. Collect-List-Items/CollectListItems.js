function extractText() {
    const items = Array.from(document.getElementById('items').children);
    const textArea = document.getElementById('result');
    for (const item of items) {
        textArea.textContent += item.textContent + '\n';
    }
}