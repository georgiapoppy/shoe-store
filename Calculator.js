var operator = 0;
function add() {
document.getElementById("addB").style.backgroundColor = "darkslategray";
document.getElementById("addB").style.color = "white";
operator = 1;
}
function sub() {
document.getElementById("subB").style.backgroundColor = "darkslategray";
document.getElementById("subB").style.color = "white";
operator = 2;
}
function times() {
document.getElementById("timesB").style.backgroundColor = "darkslategray";
document.getElementById("timesB").style.color = "white";
operator = 3;
}
function divide() {
document.getElementById("divideB").style.backgroundColor = "darkslategray";
document.getElementById("divideB").style.color = "white";
operator = 4;
}
function calculate() {
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);
    var result = 0;
    if (operator == 0) {
        alert("ERROR: Click an operator");
    }
    if ((number1 == "") || (number2 == "")) {
        alert("ERROR: Enter a number");
    }
    if (operator == 1) {
        result = number1 + number2;
    } else if (operator == 2) {
        result = number1 - number2;
    } else if (operator == 3) {
        result = number1 * number2;
    } else if (operator == 4) {
        if (num2 == 0) {
        result = "undefined";
        } else {
        result = number1 / number2;
        }
    }
    document.getElementById("result").innerHTML = "RESULT = " + result;
}