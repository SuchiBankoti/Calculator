let num1 = [];
let num2 = [];
const r = 0;

const panel = document.getElementById("panel");
const firstNum = document.getElementById("first");
const secondNum = document.getElementById("second");
const operator = document.getElementById("operator");
const result = document.getElementById("result");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const div = document.getElementById("div");
const mul = document.getElementById("mul");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const delete_btn = document.getElementById("Delete");

result.textContent = r;
equal.addEventListener("click", getResult);
clear.addEventListener("click", clearPanel);
delete_btn.addEventListener("click", deletePanel);
const AllNums = document.querySelectorAll("[data-number]");
AllNums.forEach((element) => {
  element.addEventListener("click", () => num(element.textContent));
});
const AllOperators = document.querySelectorAll("[data-operator]");
AllOperators.forEach((element) => {
  element.addEventListener("click", () => {
    if (result.textContent != 0) {
      num(result.textContent);
      operator.textContent = element.textContent;
    } else {
      operator.textContent = element.textContent;
    }
  });
});

function num(n) {
  result.textContent = "";
  if (!operator.textContent) {
    num1.push(n);
    firstNum.textContent = num1.join("");
  } else {
    num2.push(n);
    secondNum.textContent = num2.join("");
  }
}
function operate(opr, a, b) {
  a = Number(a.join(""));
  b = Number(b.join(""));
  switch (opr) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "%":
      return a / b;
    default:
      return 0;
  }
}
function getResult() {
  let o = operator.textContent;
  let r = operate(o, num1, num2);
  firstNum.textContent = "";
  secondNum.textContent = "";
  operator.textContent = "";
  num1 = [];
  num2 = [];
  result.textContent = r;
}

function clearPanel() {
  num1 = [];
  num2 = [];
  operator.textContent = "";
  firstNum.textContent = "";
  secondNum.textContent = "";
  result.textContent = r;
}
function deletePanel() {
  if (num2.length != 0) {
    num2.pop();
    secondNum.textContent = num2.join("");
  } else if (operator.textContent != "") {
    operator.textContent = "";
  } else if (num1.length > 1) {
    num1.pop();
    firstNum.textContent = num1.join("");
  } else {
    num1.pop();
    firstNum.textContent = "";
    result.textContent = r;
  }
}
