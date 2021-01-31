//Declare variables
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const add = document.getElementById('addButton');
const subtract = document.getElementById('subtractButton');
const multiply = document.getElementById('multiplyButton');
const divide = document.getElementById('divideButton');
const power = document.getElementById('powerButton');
const CE = document.getElementById('CE');
const backspace = document.getElementById('backspace');
let display = document.getElementById('display_input');



//Button Functions on the display
zero.onclick = function(){
    display.value = display.value + 0;    
}
one.onclick = function(){
    display.value = display.value + 1;    
}
two.onclick = function(){
    display.value = display.value + 2;    
}
three.onclick = function(){
    display.value = display.value + 3;    
}
four.onclick = function(){
    display.value = display.value + 4;    
}
five.onclick = function(){
    display.value = display.value + 5;    
}
six.onclick = function(){
    display.value = display.value + 6;    
}
seven.onclick = function(){
    display.value = display.value + 7;    
}
eight.onclick = function(){
    display.value = display.value + 8;    
}
nine.onclick = function(){
    display.value = display.value + 9;    
}
add.onclick = function(){
    display.value = display.value + '+';    
}
subtract.onclick = function(){
    display.value = display.value + '-';    
}
multiply.onclick = function(){
    display.value = display.value + 'x';    
}
divide.onclick = function(){
    display.value = display.value + '/';    
}
power.onclick = function(){
    display.value = display.value + '^';    
}