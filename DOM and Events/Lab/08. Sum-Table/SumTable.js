function sumTable() {
    const sums = Array.from(document.querySelectorAll('tbody > tr > td:nth-child(even)'));
    const result = document.getElementById('sum');
    let sum = 0;

    for (let i = 0; i < sums.length-1; i++) {
        sum += Number(sums[i].textContent);
    }
    result.textContent = sum;
}