const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}
