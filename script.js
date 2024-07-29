const display = document.getElementById("display");
const result = document.getElementById("result");
const numberButton = document.getElementsByClassName("number");

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
    result.value = display.value;
    display.value = eval(result.value);
    if(display.value === "Infinity"){
        display.value = "";
    }

}
    

    


function procentCalc(){
    display.value = eval(display.value) / 100;
    
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
