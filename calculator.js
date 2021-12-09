const input = document.querySelector("#result")
function addInput(number){
input.value = input.value + number
}
function result(){
    input.value = eval(input.value)
}
function deleted(){
     input.value = "";
}
function sin(){
input.value=Math.sin(input.value)
}
function cos(){
    input.value=Math.cos(input.value)
}

function tan(){
    input.value=Math.tan(input.value)
}

function pow(){
    input.value=Math.pow(input.value,2)
}

function sqrt(){
    input.value=Math.log(input.value,2)
}

function log(){
    input.value=Math.log(input.value)
}

function pi(){
    input.value= 3.14159265359
}

function e(){
    input.value= 2.71828182846
}

function backspace(){
    input.value = input.value.substr(0,input.value.length-1)
}



