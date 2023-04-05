function getInfo() {
    const stopId = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    buses.innerHTML = ''
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    fetch(BASE_URL + stopId.value)
        .then((response) => {
            return response.json();
        }).then(
        (data) => {
            stopName.textContent = data.name;
            for (const bus in data.buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`
                buses.appendChild(li);
            }
        }).catch(() => {
        stopName.textContent = 'Error';
    })

}