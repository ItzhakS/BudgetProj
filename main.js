var amountTotal = document.getElementById("sum-total");
var incAmount = document.getElementsByName("incAmount");
var expAmount = document.getElementsByName("expAmount");
var incAmountTotal = 0;
var expenseContainer = document.getElementById("expenseContainer");
var mainContainer = document.getElementById("mainContainer");
var diffContainer = document.getElementById("diffContainer")
var diff = document.getElementById("diff");
var expAmountTtl = 0
var incomeTotalFinal = document.getElementById("incomeTotal");
var expenseTotalFinal = document.getElementById("expenseTotal");
var expAmountTotal = document.getElementById("expSum-total");
var mainIncome = document.getElementById("mainIncome");
var mainExpense = document.getElementById("mainExpense");
var amountArr = [];
var amountArr2 = [];
var expAmountArr = [];
var expAmountArr2 = [];
var incomeSrc = document.getElementsByName("incomeSrc");
var expenseSrc = document.getElementsByName("expense-name");
var highest = 0;
var expHighest = 0;
var idIncomeN = 4;
var idExpenseN = 4;

//Income Input handlers
for (var index = 0; index < idIncomeN; index++) {
    var incInID = document.getElementById("amount#" + (index + 1));
    incInID.addEventListener("input", add3);
};

// Sum of Inputs
function addUp(a, b) {
    return a + b;
};

// Income input function
function add3() {
    for (var i = 0; i < idIncomeN; i++) {
        incAmount = document.getElementsByName("incAmount");
        amountArr[i] = parseFloat(incAmount[i].value) || 0;
        incAmountTotal = amountArr.reduce(addUp);
        amountTotal.innerHTML = incAmountTotal;

    };
};

// for (var index = 0; index < incAmount.length; index++) {
//     incAmount[index].addEventListener("input", add3);

// };


// Expense Input function
function expAdd() {
    for (var i = 0; i < idExpenseN; i++) {
        expAmount = document.getElementsByName("expAmount");
        expAmountArr[i] = parseFloat(expAmount[i].value) || 0;
        expAmountTtl = expAmountArr.reduce(addUp);
        expAmountTotal.innerHTML = expAmountTtl;
    };
};

for (var index = 0; index < idExpenseN; index++) {
    var expInID = document.getElementById("expAmount#" + (index + 1));
    expInID.addEventListener("input", expAdd);
};

// for (var i = 0; i < expAmount.length; i++) {
//     expAmount[i].addEventListener("input", expAdd);

// };


// Button Handlers
var nextBtn = document.getElementById("next-btn");
var backBtn = document.getElementById("back-btn");
var backBtn2 = document.getElementById("back-btn2");
var backBtn3 = document.getElementById("back-btn3");
var calculate = document.getElementById("calculate-btn");
var addFeildInc = document.getElementById("add-btnI");
var addFeildExp = document.getElementById("add-btnE");
var deleteBtnInc = document.getElementById("deleteBtnInc");
var deleteBtnExp = document.getElementById("deleteBtnExp");

nextBtn.addEventListener("click", toExpenses);
backBtn.addEventListener("click", toIncome);
backBtn2.addEventListener("click", toExpenses);
backBtn3.addEventListener("click", toIncome);
calculate.addEventListener("click", toDiff);
deleteBtnInc.addEventListener("click", removeInputInc);
deleteBtnExp.addEventListener("click", removeInputExp);

function removeInputInc(){
    var input = document.getElementById("amount#" + idIncomeN);
    var incSource = document.getElementById("incomeSrc" + idIncomeN);
    input.outerHTML = "";
    incSource.outerHTML = "";
    delete input, incSource;
    idIncomeN--
};
function removeInputExp(){
    var input = document.getElementById("expAmount#" + idExpenseN);
    var expSource = document.getElementById("expenseName" + idExpenseN) 
    input.outerHTML = "";
    expSource.outerHTML = "";
    delete input, expSource;
    idExpenseN--

};


// <div class="form-group" id="amountName">
//               <input type="text" class="form-control" id="incomeSrc1" placeholder="Enter Source" name="incomeSrc">

// Add Feilds Income functionality
var incAmountName = document.getElementById("amountName");
var incInputs = document.getElementById("incomeInputs");
addFeildInc.addEventListener("click", addInputI);
function addInputI() {
    idIncomeN++
    var input = document.createElement("input");
    input.setAttribute("id", "amount#" + idIncomeN);
    input.setAttribute("name", "incAmount");
    input.setAttribute("placeholder", "Enter Amount");
    input.setAttribute("type", "number");
    incInputs.appendChild(input).className = "form-control";
    for (var index = 0; index < idIncomeN; index++) {
        var incInID = document.getElementById("amount#" + (index + 1));
        incInID.addEventListener("input", add3);
    };

    // Income Source Inputs
    var inputSrc = document.createElement("input");
    inputSrc.setAttribute("id", "incomeSrc" + idIncomeN);
    inputSrc.setAttribute("name", "incomeSrc");
    inputSrc.setAttribute("placeholder", "Enter Source");
    inputSrc.setAttribute("type", "text");
    incAmountName.appendChild(inputSrc).className = "form-control";
    incomeSrc = document.getElementsByName("incomeSrc");;
};

var expenseName = document.getElementById("expenseName");
var expenseInputs = document.getElementById("expenseInputs");
addFeildExp.addEventListener("click", addInputE);
function addInputE() {
    idExpenseN++

    // Expense Number Inputs
    var inputNum = document.createElement("input");
    inputNum.setAttribute("id", "expAmount#" + idExpenseN);
    inputNum.setAttribute("name", "expAmount");
    inputNum.setAttribute("placeholder", "Enter Amount");
    inputNum.setAttribute("type", "number");
    expenseInputs.appendChild(inputNum).className = "form-control";
    for (var index = 0; index < idExpenseN; index++) {
        var expInID = document.getElementById("expAmount#" + (index + 1));
        expInID.addEventListener("input", expAdd);
    };

    // Expense Source Inputs
    var inputSrc = document.createElement("input");
    inputSrc.setAttribute("id", "expenseName" + idExpenseN);
    inputSrc.setAttribute("name", "expense-name");
    inputSrc.setAttribute("placeholder", "Enter Expense");
    inputSrc.setAttribute("type", "text");
    expenseName.appendChild(inputSrc).className = "form-control";
    expenseSrc = document.getElementsByName("expense-name");

};
// End

function toExpenses() {
    mainContainer.className = "hide";
    expenseContainer.className = "container well";
    diffContainer.className = "hide";
};

function toIncome() {
    expenseContainer.className = "hide";
    mainContainer.className = "container well";
    diffContainer.className = "hide";
};

function toDiff() {
    expenseContainer.className = "hide";
    mainContainer.className = "hide";
    diffContainer.className = "container well";
    diff.innerHTML = incAmountTotal - expAmountTtl;
    incomeTotalFinal.innerHTML = incAmountTotal;
    expenseTotalFinal.innerHTML = expAmountTtl;

    findHighestIncome();

    findHighestExpense();
};

function findHighestIncome() {
    amountArr2 = amountArr.slice();
    amountArr2.sort(function (a, b) {
        return b - a;
    });
    highest = amountArr2.shift() || 0;
    var a = amountArr.indexOf(highest);
    if (incomeSrc[a].value === "") {
        mainIncome.innerHTML = "No Source Stated" + " (" + highest + ")";
    }
    else {
        mainIncome.innerHTML = incomeSrc[a].value + " (" + highest + ")";
    };
};

function findHighestExpense() {
    expAmountArr2 = expAmountArr.slice();
    expAmountArr2.sort(function (a, b) {
        return b - a;
    });
    expHighest = expAmountArr2.shift() || 0;
    var b = expAmountArr.indexOf(expHighest);
    if (expenseSrc[b].value === "") {
        mainExpense.innerHTML = "No Source Stated" + " (" + expHighest + ")";
    }
    else {
        mainExpense.innerHTML = expenseSrc[b].value + " (" + expHighest + ")";
    };
};
