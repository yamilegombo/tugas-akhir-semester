// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function caltulator() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }

}