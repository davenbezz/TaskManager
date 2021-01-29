/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/


// Define UI Variables  here 
const collection1 = document.querySelector('#collection1');
const collection2 = document.querySelector('#collection2');
const collection3 = document.querySelector('#collection3');
const collection4 = document.querySelector('#collection4');

const items1 = collection1.getElementsByTagName('span');
const items2 = collection2.getElementsByTagName('span');
const items3 = collection3.getElementsByTagName('span');
const items4 = collection4.getElementsByTagName('span');

const locationInformation = [location.href, location.protocol, location.host, location.port, location.hostname];
const browserInformation = [navigator.appName, navigator.appVersion, navigator.platform, navigator.language, navigator.cookieEnabled];
const screenInformation = [screen.height, screen.width, screen.pixelDepth];
const historyInformation = [history.length, history.state];


// Display the BOM Information on the innerHTML of the elements
for(let i = 0; i < items1.length; i++){
    items1[i].innerHTML = locationInformation[i];
}
for(let i = 0; i < items2.length; i++){
    items2[i].innerHTML = browserInformation[i];
}
for(let i = 0; i < items3.length; i++){
    items3[i].innerHTML = screenInformation[i];
}
for(let i = 0; i < items4.length; i++){
    items4[i].innerHTML = historyInformation[i];
}