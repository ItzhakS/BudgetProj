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
    return amountTtl = num1 + num2 + num3 + num4;
};

var expenseContainer = document.getElementById("expenseContainer");
var mainContainer = document.getElementById("mainContainer");
var nextBtn = document.getElementById("next-btn");
var backBtn = document.getElementById("back-btn");
var backBtn2 = document.getElementById("back-btn2");
var calculate = document.getElementById("calculate-btn");
var diffContainer = document.getElementById("diffContainer")
var diff = document.getElementById("diff");
var amountTtl = 0
var expAmountTtl = 0
var incomeTotal = document.getElementById("incomeTotal");
var expenseTotal = document.getElementById("expenseTotal");

nextBtn.addEventListener("click", toExpenses);
backBtn.addEventListener("click", toIncome);
backBtn2.addEventListener("click", toExpenses);
calculate.addEventListener("click", toDiff)

function toExpenses(){
    mainContainer.className = "hide"; 
    expenseContainer.className = "container well";
};
function toIncome(){
    expenseContainer.className = "hide"; 
    mainContainer.className = "container well";
};
function toDiff(){
    expenseContainer.className = "hide"; 
    mainContainer.className = "hide";
    diffContainer.className = "container well";
    diff.innerHTML = amountTtl - expAmountTtl;
    incomeTotal.innerHTML = amountTtl;
    expenseTotal.innerHTML = expAmountTtl;
}
var expamount1 = document.getElementById("expamount#1");
var expamount2 = document.getElementById("expamount#2");
var expamount3 = document.getElementById("expamount#3");
var expamount4 = document.getElementById("expamount#4");
var expAmountTotal = document.getElementById("expSum-total");

expamount1.addEventListener("input", add2);
expamount2.addEventListener("input", add2);
expamount3.addEventListener("input", add2);
expamount4.addEventListener("input", add2);

function add2(){
    var num1 = parseFloat(expamount1.value) || 0;
    var num2 = parseFloat(expamount2.value) || 0;
    var num3 = parseFloat(expamount3.value) || 0;
    var num4 = parseFloat(expamount4.value) || 0;
    expAmountTotal.innerHTML = num1 + num2 + num3 + num4;
    return expAmountTtl = num1 + num2 + num3 + num4;
};
// for (var i = 0; i < 4; i++){
//     var expamount[i]
// }