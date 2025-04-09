//calc progg

const display = document.getElementById('display');

function appendToDisplay(input) {
    const display = document.getElementById('display');
    display.value += input;
}

function calculate(){
    const display = document.getElementById('display');
    try{display.value = eval(display.value);}
    catch(error){
        display.value = "Error"
    }
    
}

function clearDisplay(){
    const display = document.getElementById('display');
    display.value = " ";
    
}