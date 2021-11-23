const displayPreviousValue = document.querySelector('.previous-value');
const displayCurrentValue = document.querySelector('.current-value');
const numbersButtons = document.querySelectorAll('.number');
const operatorsButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.addNumber(button.textContent)
        });
});

operatorsButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.comput(button.value);
    });
});