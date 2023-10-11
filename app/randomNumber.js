const minValue = 1;
const maxValue = 1000;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
    return parseInt(Math.random() * maxValue + 1);
}

console.log("Número secreto:", secretNumber);

const minElement = document.getElementById('min-value');
minElement.innerHTML = minValue;

const maxElement = document.getElementById('max-value');
maxElement.innerHTML = maxValue;