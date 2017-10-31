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
    var num1 = parseFloat(amount1.value) || 0;
    var num2 = parseFloat(amount2.value) || 0;
    var num3 = parseFloat(amount3.value) || 0;
    var num4 = parseFloat(amount4.value) || 0;
    amountTotal.innerHTML = num1 + num2 + num3 + num4;
};

var expenseContainer = document.getElementById("expenseContainer");
var mainContainer = document.getElementById("mainContainer");
var nextBtn = document.getElementById("next-btn");
var backBtn = document.getElementById("back-btn");
nextBtn.addEventListener("click", toExpenses);
backBtn.addEventListener("click", toIncome);

function toExpenses(){
    mainContainer.className = "hide"; 
    expenseContainer.className = "container well";
};
function toIncome(){
    expenseContainer.className = "hide"; 
    mainContainer.className = "container well";
};