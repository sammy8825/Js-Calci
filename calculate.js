var operators = document.querySelectorAll(".operator")
var numbers = document.querySelectorAll("#number");
var display = document.querySelector("#output");
var input = document.querySelector("#input");
var res = document.querySelector("#evaluate");
var backspace = document.querySelector("#backspace");
var clear = document.querySelector("#clear");

var num = "";

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        num += this.id;
        display.innerHTML = num;
    });
}

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        num += this.innerHTML;
        display.innerHTML = num;
    });
}

res.addEventListener("click", function () {
    input.innerHTML = num;
    display.innerHTML = eval(num);
    num = "";
});

backspace.addEventListener("click", function () {
    num = num.substr(0, num.length - 1);
    display.innerHTML = num;
    input.innerHTML = "";
});

clear.addEventListener("click", function () {
    num = "";
    display.innerHTML = num;
    input.innerHTML = num;
});