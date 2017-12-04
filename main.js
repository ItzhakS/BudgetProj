var amount1 = document.getElementById("amount#1");
var amount2 = document.getElementById("amount#2");
var amount3 = document.getElementById("amount#3");
var amount4 = document.getElementById("amount#4");
var amountTotal = document.getElementById("sum-total");
var incAmount = document.getElementsByName("incAmount");
var expAmount = document.getElementsByName("expAmount");
var incAmountTotal = 0;


// Income input function 
for (var index = 0; index < incAmount.length; index++) {
    incAmount[index].addEventListener("input", add2);
    function add2() {

        for (var i = 0; i < incAmount.length; i++) {
            if (incAmount[i] != NaN){
            amountArr[i] = parseFloat(incAmount[i].value);
            } if   {
                amountArr[i] = 0;
            };
        };
    };
};

// Expense Input function
for (var index = 0; index < expAmount.length; index++) {
    expAmount[index].addEventListener("input", expAdd);
    function expAdd() {

        for (var i = 0; i < expAmount.length; i++) {
            if (expAmount[i] != NaN){
            expAmountArr[i] = parseFloat(expAmount[i].value);
            } else  {
                expAmountArr[i] = 0;
            };
        };
    };
};

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
    amountTtl = num1 + num2 + num3 + num4;
};

var expenseContainer = document.getElementById("expenseContainer");
var mainContainer = document.getElementById("mainContainer");
var nextBtn = document.getElementById("next-btn");
var backBtn = document.getElementById("back-btn");
var backBtn2 = document.getElementById("back-btn2");
var backBtn3 = document.getElementById("back-btn3");
var calculate = document.getElementById("calculate-btn");
var diffContainer = document.getElementById("diffContainer")
var diff = document.getElementById("diff");
var amountTtl = 0
var expAmountTtl = 0
var incomeTotal = document.getElementById("incomeTotal");
var expenseTotal = document.getElementById("expenseTotal");
var expamount1 = document.getElementById("expamount#1");
var expamount2 = document.getElementById("expamount#2");
var expamount3 = document.getElementById("expamount#3");
var expamount4 = document.getElementById("expamount#4");
var expAmountTotal = document.getElementById("expSum-total");
var incomeSrc1 = document.getElementById("incomeSrc1");
var incomeSrc2 = document.getElementById("incomeSrc2");
var incomeSrc3 = document.getElementById("incomeSrc3");
var incomeSrc4 = document.getElementById("incomeSrc4");
var expenseName1 = document.getElementById("expenseName1");
var expenseName2 = document.getElementById("expenseName2");
var expenseName3 = document.getElementById("expenseName3");
var expenseName4 = document.getElementById("expenseName4");
var mainIncome = document.getElementById("mainIncome");
var mainExpense = document.getElementById("mainExpense");
var inputAmount = document.getElementsByName("incAmount");
var amountArr = [];
var expAmountArr = [];


//     amountArr = [].map.call(inputAmount, function( input ) {
//     return parseFloat(input.value);
// });
 
nextBtn.addEventListener("click", toExpenses);
backBtn.addEventListener("click", toIncome);
backBtn2.addEventListener("click", toExpenses);
backBtn3.addEventListener("click", toIncome);
calculate.addEventListener("click", toDiff)

function toExpenses(){
    mainContainer.className = "hide"; 
    expenseContainer.className = "container well";
    diffContainer.className = "hide";
    
};
function toIncome(){
    expenseContainer.className = "hide"; 
    mainContainer.className = "container well";
    diffContainer.className = "hide";
};
function toDiff(){
    expenseContainer.className = "hide"; 
    mainContainer.className = "hide";
    diffContainer.className = "container well";
    diff.innerHTML = amountTtl - expAmountTtl;
    incomeTotal.innerHTML = amountTtl;
    expenseTotal.innerHTML = expAmountTtl;
    console.log(amountArr);
    alert(expAmountArr);
};


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