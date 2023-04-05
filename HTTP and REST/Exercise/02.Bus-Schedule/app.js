function solve() {
    const resultPlace = document.querySelector('#info > .info');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'
    const arriveBtn = document.getElementById('arrive');
    const departBtn = document.getElementById('depart');
    let stopId = 'depot';
    let stopName = null;

    function depart() {
        fetch(`${BASE_URL}${stopId}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                departBtn.disabled = true;
                arriveBtn.disabled = false;
                stopId = data.next;
                stopName = data.name;
                resultPlace.textContent = `Next stop ${stopName}`;
            })
    }

    async function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        resultPlace.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();