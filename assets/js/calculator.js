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
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const powerButton = document.getElementById('powerButton');
const dot = document.getElementById('dotButton');
const sqrtButton = document.getElementById('sqrtButton');
const CE = document.getElementById('CE');
const backspace = document.getElementById('backspace');
let display = document.getElementById('display_input');
const equal = document.getElementById('equalButton');



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
addButton.onclick = function(){
    display.value = display.value + '+';    
}
subtractButton.onclick = function(){
    display.value = display.value + '-';    
}
multiplyButton.onclick = function(){
    display.value = display.value + 'x';    
}
divideButton.onclick = function(){
    display.value = display.value + '/';    
}
powerButton.onclick = function(){
    display.value = display.value + '^';    
}
sqrtButton.onclick = function(){
    display.value = display.value + '√';
}
dot.onclick = function(){
    display.value = display.value + '.';
}
CE.onclick = function(){
    display.style = "font-size: 5rem;"
    display.value = '';
}
backspace.onclick = function(){
    display.value = display.value.substring(0, display.value.length - 1);
}
//Evaluate Functions
function add(val) {
    let result = 0;
    const numbers = val.split('+');
    numbers.forEach(number => {
        result += parseFloat(number);
    });
    display.value = result;
    return result;
}
function multiply(val) {
    let result = 1;
    const numbers = val.split('x');
    numbers.forEach(number => {
        result *= parseFloat(number);
    });
    display.value = result;
    return result;
}
function subtract(val){
    const numbers = val.split('-');
    let result = numbers.shift();
    numbers.forEach(number => {
        result -= parseFloat(number);
    });
    display.value = result;
    return result;
}

function divide(val){
    let work = true;
    function isTrue(val){
        numbers = val.split('/');
        numbers.shift();
        numbers.forEach(number =>{
            if(number == '0'){
                work = false;
            }
        });
    }
    isTrue(val);
    if(work){
        numbers = val.split('/');
        let result = parseFloat(numbers.shift());
        numbers.forEach(number => {
            result /= parseFloat(number);
        });
        display.value = result;
        return result;
    }else{
        display.style = "font-size: 2rem;"
        display.value = 'Please enter a valid denominator!';
        return 'Please enter a valid denominator.';
    }
}
function sqrt(val){
    val = val.substring(1);
    display.value = (Math.sqrt(val));
}






//The Equal Button's work

equal.onclick = function(){
    console.log('equal button clicked');
    key = display.value.toString();
    console.log(key);
    if((new RegExp('\\+')).test(key)){
        console.log(add(key));
    }else if((new RegExp('\\-')).test(key)){
        subtract(key);
    }else if((new RegExp('x')).test(key)){
        multiply(key);
    }else if((new RegExp('\\/')).test(key)){
        divide(key);
    }else if((new RegExp('\\^')).test(key)){
        divide(key);
    }else if((new RegExp('√')).test(key)){
        sqrt(key);
    }
    else{
        console.log('false');
    }
}