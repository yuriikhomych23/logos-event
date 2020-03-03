let getId = x => document.getElementById(x); // тепер можемо звертатись прсото через getId\
let getSel = x => document.querySelector(x);

// getId('click').onclick = function(event) {
//     console.log(event);
//     getSel('.box').style.width = '100px';
//     getSel('.box').style.height = '100px';
//     getSel('.box').style.backgroundColor = 'red';
//     getSel('.box').style.transition = '.6s'; // при натисканні червоний квадрат 
//     console.log(this); // скорочений синтаксис для того щоб не прописувати getId('click'); this поверне те саме, але при arrow function this втрачається;
//     this.style.width = '100px';
// }



// function changeSize() {
//     getSel('.box').style.width = '100px';
//     getSel('.box').style.height = '100px';
//     getSel('.box').style.background = 'blue';
//     console.log(this);
// }

// getId('click').onclick = changeSize; // дужки не потрібно вказувати


// getSel('.box').onmouseover = function() {
//     this.style.transform = 'scale(1.3)';
// }

// getSel('.box').onmouseout = function() {
//     this.style.transform = 'scale(1)'; // поверне назад, можна також вказати пусті лапки воно поверне на дефолтне заечння
// }


// getSel('.box').onmouseenter = function() {
//     console.log('work'); // спрацьовує одноразово 
// }

// getSel('.box').onmouseleave = function() {
//     console.log('work2');
// }

// getSel('.box').onmousedown = function() {
//     console.log('onmousedown'); // спрацьовує при натисканні
// }

// getSel('.box').onmouseup = function() {
//     console.log('onmouseup'); // спрацьовує коли відпускає мишку 
// }

// getSel('.tt').onfocus = function(){
//     document.body.style.backgroundColor = 'orange';
// }
// getSel('.tt').onblur = function(){
//     document.body.style.backgroundColor = ''; // змінитьь фон на дефолтний 
// }



// getSel('.tt').onchange = function() {
//     getSel('.text').innerText = this.value; // реагує на попередні значення, якщо воно змінилось воно спрацьовує, якщо не змінилось не відпрацьовує
//     console.log('tyuut');
// }

// getSel('.tt').oninput = function(){
//     getSel('.text').innnerText = this.value;
// }


// getSel('.myH').onclick = function(event) {
//     console.log(event);
//     if(event.altKey) {
//         this.style.boxShadow = '2px 2px 15px red';
//     }
// }

// getSel('.myH').onclick = function(event) {
//     console.log(event);
//     if(event.altKey) {
//         this.style.boxShadow = '2px 2px 15px red';
//     } else if(event.ctrlKey){
//         this.style.boxShadow = '2px 2px 15px blue';
//     } else {
//         this.style.boxShadow = '';
//     }
// }




// getSel('.block').onmouseout = function() {
//     let div = document.createElement('div');
//     div.style.width = '60px';
//     div.style.height = '60px';
//     div.style.backgroundColor = 'yellow';
//     div.style.borderRadius = '50%';
//     div.style.margin = '10px';
//     this.appendChild(div);
// }


