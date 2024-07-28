const display = document.getElementById("display");
const result = document.getElementById("result");

function appendToDisplay(input){
    display.value += input;
}



function allClear(){
    display.value = "";
    result.value = "";
}

function deleteOne(){
    if(display.value.length > 0){
        display.value = display.value.slice(0, -1);
    }
}

function calculate(){
    
    result.value += display.value;
    try {
        display.value = eval(result.value);
    }
    catch(error){
    display.value = "Error";
    }
    if(display.value === "Infinity"){
        display.value = " ";
        result.value = " ";
    }
    
    }
    
function operator(input){
    display.value += input;
    result.value = display.value;
    display.value = "";
}

function procentCalc(){
    display.value = display.value / 100;
    
}

addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        calculate();
    }
});

addEventListener("keydown", (event) => {
    if(event.key === "Backspace"){
        deleteOne();
    }
});

addEventListener("keydown", (event) => {
    if(event.key === "Delete"){
        allClear();
    }
});