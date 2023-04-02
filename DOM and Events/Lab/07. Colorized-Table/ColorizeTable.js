function colorize() {
    const evenTrs = document.querySelectorAll('tr:nth-child(even)');
    for (const evenTr of evenTrs) {
        evenTr.style.backgroundColor = "Teal";
    }
}