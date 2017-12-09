var amountTotal = document.getElementById("sum-total");
var incAmount = document.getElementsByName("incAmount");
var expAmount = document.getElementsByName("expAmount");
var incAmountTotal = 0;

function addUp(a, b){
    return a + b;
};
// Income input function 
for (var index = 0; index < incAmount.length; index++) {
    incAmount[index].addEventListener("input", add3);
    function add3() {
        for (var i = 0; i < incAmount.length; i++) {
             amountArr[i] = parseFloat(incAmount[i].value) || 0;
             incAmountTotal = amountArr.reduce(addUp);
             amountTotal.innerHTML = incAmountTotal;
        };
    };
};

// Expense Input function
for (var i = 0; i < expAmount.length; i++) {
    expAmount[i].addEventListener("input", expAdd);
    function expAdd() {
        for (var i = 0; i < expAmount.length; i++) {
            expAmountArr[i] = parseFloat(expAmount[i].value) || 0;
            expAmountTtl = expAmountArr.reduce(addUp);
            expAmountTotal.innerHTML = expAmountTtl;
        };
    };
};

var expenseContainer = document.getElementById("expenseContainer");
var mainContainer = document.getElementById("mainContainer");

// Button Handlers
var nextBtn = document.getElementById("next-btn");
var backBtn = document.getElementById("back-btn");
var backBtn2 = document.getElementById("back-btn2");
var backBtn3 = document.getElementById("back-btn3");
var calculate = document.getElementById("calculate-btn");
var addFeildInc = document.getElementById("add-btnI");
var addFeildExp = document.getElementById("add-btnE");

var input = document.createElement("input");
input.setAttribute("id", "amount#5") ;
input.setAttribute("name", "incAmount");
input.setAttribute("placeholder", "Enter Amount");
input.setAttribute("type", "number");
    
var incInputs = document.getElementById("incomeInputs");
addFeildInc.addEventListener("click", addInputI);
function addInputI(){
    incInputs.innerHTML = "<input type="number" class="form-control" id="amount#4" placeholder="Enter Amount" name="incAmount">";
    incInputs.appendChild(input).className= "form-control" ;
    incAmount = document.getElementsByName("incAmount");
    
};


var diffContainer = document.getElementById("diffContainer")
var diff = document.getElementById("diff");
var expAmountTtl = 0
var incomeTotal = document.getElementById("incomeTotal");
var expenseTotal = document.getElementById("expenseTotal");
var expAmountTotal = document.getElementById("expSum-total");
var mainIncome = document.getElementById("mainIncome");
var mainExpense = document.getElementById("mainExpense");
var amountArr = [];
var expAmountArr = [];

 
nextBtn.addEventListener("click", toExpenses);
backBtn.addEventListener("click", toIncome);
backBtn2.addEventListener("click", toExpenses);
backBtn3.addEventListener("click", toIncome);
calculate.addEventListener("click", toDiff)

function toExpenses(){
    mainContainer.className = "hide"; 
    expenseContainer.className = "container well";
    diffContainer.className = "hide";
    amountArr.sort(function(a , b){
        return b - a;
    });
    console.log(amountArr[0]);
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
    diff.innerHTML = incAmountTotal - expAmountTtl;
    incomeTotal.innerHTML = incAmountTotal;
    expenseTotal.innerHTML = expAmountTtl;
    alert(expAmountArr);
};