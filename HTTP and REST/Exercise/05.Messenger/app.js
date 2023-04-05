function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const refreshBtn = document.getElementById('refresh');
    const submitBtn = document.getElementById('submit');
    const name = document.getElementsByName('author')[0];
    const message = document.getElementsByName('content')[0];
    const messageBox = document.getElementById('messages');
    refreshBtn.addEventListener('click', refreshHandler);
    submitBtn.addEventListener('click', async () => {
        const authorName = name.value;
        const contentValue = message.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                "author": authorName,
                "content": contentValue,
            })
        }
        const response = await fetch(BASE_URL, httpHeaders)

        name.value = ''
        message.value = ''
    })
    function refreshHandler(){
        fetch(BASE_URL)
            .then((response) => {return response.json()})
            .then((data) => {
                const messages = []
                for (const dataKey of Object.values(data)) {
                    messages.push(`${dataKey.author}: ${dataKey.content}`);
                }
                messageBox.textContent = messages.join('\n');
            })
    }
}

attachEvents();