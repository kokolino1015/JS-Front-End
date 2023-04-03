function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;
    const result = document.getElementById('result');
    console.log(firstNum);
    console.log(secondNum);
    result.textContent = Number(firstNum) - Number(secondNum);
}