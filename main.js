var amount1 = document.getElementById("amount#1");
var amount2 = document.getElementById("amount#2");
var amount3 = document.getElementById("amount#3");
var amount4 = document.getElementById("amount#4");
var amountTotal = document.getElementById("sum-total");

amount1.addEventListener("input", add);
amount2.addEventListener("input", add);
amount3.addEventListener("input", add);
amount4.addEventListener("input", add);

function add(){
    var num1 = parseFloat(amount1.value);
    var num2 = parseFloat(amount2.value);
    var num3 = parseFloat(amount3.value);
    var num4 = parseFloat(amount4.value);
    amountTotal.innerHTML = num1 + num2 + num3 + num4;
};
