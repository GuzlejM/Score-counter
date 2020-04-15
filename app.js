var p1Btn = document.querySelector("#P1btn");
var p2Btn = document.querySelector("#P2btn");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var gameOver = document.querySelector("#maxScore");
var input = document.querySelector("input");
var inputValue = document.querySelector("input").value;
var maxScore = gameOver.textContent;
var inputAttribute = input.getAttribute("value")

//************ TEST TEST TEST *************/
console.log(input + '" is input element"');
console.log(inputValue +" is inputValue");
console.log(gameOver.textContent + " is gameOver");
console.log(maxScore + " is maxScore");
console.log(input.getAttribute.value);
console.log(input.getAttribute.value);
console.log(inputAttribute);

//*****************************************/


p1Btn.addEventListener("click", function() {
    p1Display.textContent++;
    if(p1Display.textContent >= gameOver.textContent) {
        p1Display.textContent = 0;
        p2Display.textContent = 0;
    }
});

p2Btn.addEventListener("click", function() {
    p2Display.textContent++;
    if(p2Display.textContent >= gameOver.textContent) {
        p1Display.textContent = 0;
        p2Display.textContent = 0;
    }
});

reset.addEventListener("click", function() {
    p1Display.textContent = 0;
    p2Display.textContent = 0;
});

input.addEventListener("click", function() {
});






//------------------------------------------
//------- RESET BUTTON CONFIG TRIES---------
//------------------------------------------


//Just console.log => 2nd line,right side
//*******************************************

//reset.addEventListener("click", function() {
//  1  let h1 = document.getElementsByTagName("h1");
//  2  h1.innerHTML = '<h1><span id="P1Display">0</span> to <span id="P2Display">0</span></h1>';
//  3  console.log(h1);
//});

//*******************************************

//Set nested h1 in the old h1 and strech h1
//because of 2 h1s cant use Player Buttons after change
//*******************************************

//reset.addEventListener("click", function() {
//    let h1 = document.querySelector("h1");
//    h1.innerHTML = '<h1><span id="p1Display">0</span> to <span id="p2Display">0</span></h1>';
//    console.log(h1);
//});

//*******************************************



//Change innerHtml but can't use Player btns
//*******************************************

//reset.addEventListener("click", function() {
//    let h1 = document.querySelector("h1");
//    h1.innerHTML = '<span id="p1Display">0</span> to <span id="p2Display">0</span>';
//    console.log(h1);
//});

//*******************************************
