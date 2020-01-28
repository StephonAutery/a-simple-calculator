
// build the numbers
function makeNum(event){
    if (gotTotal === true){
        displayClear();
    }  
    display.appendChild(document.createTextNode(event.target.textContent));
    var number = event.target.textContent;
    if (gotFirst){
        secondNumb = parseInt(secondNumb + number);
        gotSecond = true;
    } else {
        firstNumb = parseInt(firstNumb + number);
    }
}

// clear the display and reset all values
function displayClear(){
    var keyTarget = document.createTextNode("");
    display.textContent = "";
    firstNumb = "";
    secondNumb = "";
    gotFirst = false;
    gotTotal = false;
    gotSecond = false;
    gotOperator = false;
}

// get the operator
function getOperator(event){
    console.log(gotFirst);
    console.log(gotOperator);
    if (gotOperator === false && firstNumb != ""){
        operator = event.target.textContent;
        display.appendChild(document.createTextNode(" "));
        display.appendChild(document.createTextNode(event.target.textContent));
        display.appendChild(document.createTextNode(" "));
        gotFirst = true;
        gotOperator = true;
    }
}

// do the math!
function getVal(event){
    if (gotSecond === true && gotFirst === true && gotTotal === false){
        var getOp = document.createTextNode(event.target.textContent);
        getOp = event.target.textContent;
        var doIt = 0;
        switch (operator){
            case "*":
                var doIt = firstNumb * secondNumb;
                break;
            case "-":
                var doIt = firstNumb - secondNumb;
                break;
            case "/":
                var doIt = firstNumb / secondNumb;
                break;
            case "+":
                var doIt = firstNumb + secondNumb;
        }
        display.appendChild(document.createTextNode("  =  "));    
        display.appendChild(document.createTextNode(doIt));
        gotTotal = true;
    }
}

// variable declarations and settings
var getNum = "";
var getKey = 0;
var firstNumb  = "";
var secondNumb = "";
var gotFirst = false;
var gotSecond = false;
var gotTotal = false;
var gotOperator = false;
var operator = "";
var display = document.getElementById("display");
display.textContent = "";

// clear the display
varClear = document.getElementById("clear");
varClear.addEventListener('click', displayClear, false);

// build the number buttons
for (i = 1; i <= 9; i++){
    varKey = document.getElementById("key" + i);
    varKey.addEventListener('click', makeNum, false);
}

//build the zero button
varKey = document.getElementById("zero");
varKey.addEventListener('click', makeNum, false);

// build the operator buttons
varAdd = document.getElementById("key10");
varAdd.addEventListener('click', getOperator, false);
varSub = document.getElementById("key11");
varSub.addEventListener('click', getOperator, false);
varMult = document.getElementById("key12");
varMult.addEventListener('click', getOperator, false);
varDiv = document.getElementById("key13");
varDiv.addEventListener('click', getOperator, false);

// evaluate the equation
varProcess = document.getElementById("process");
varProcess.addEventListener('click', getVal, false);