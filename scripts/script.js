let firstNumber = document.querySelector("#first-number");
let secondNumber = document.querySelector("#last-number");
let resultNumber = document.querySelector("#result");
let sign = document.querySelector("#sign");

let calculate = {
  firstInput: [],
  secondInput: [],
  operator: null,
};

const clearCalculate = () => {
  calculate.firstInput = [];
  calculate.secondInput = [];
  calculate.operator = null;
};

const clearResult = () => {
  resultNumber.innerText = "";
  firstNumber.innerText = "";
  secondNumber.innerText = "";
};

const calculateNumbers = (calculate, firstInput, secondInput) => {
  let result;
  switch (calculate.operator) {
    case "+":
      result = firstInput + secondInput;
      console.log(result);
      resultNumber.innerText = result;
      break;

    case "-":
      result = firstInput - secondInput;
      resultNumber.innerText = result;
      break;

    case "×":
      result = firstInput * secondInput;
      resultNumber.innerText = result;
      break;

    case "÷":
      result = firstInput / secondInput;
      resultNumber.innerText = result;
      break;

    default:
      break;
  }
}

document.querySelectorAll("#number").forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    // if first input is null, put a number
    if (!calculate.operator) {
      clearResult();
      calculate.firstInput.push(e.target.innerText);
      firstNumber.innerText = calculate.firstInput.join("");
    }
    if (calculate.operator) {
      calculate.secondInput.push(e.target.innerText);
      secondNumber.innerText = calculate.secondInput.join("");
    }
    console.log(calculate);
  });
});

document.querySelectorAll("#operator").forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    calculate.operator = e.target.innerText;
    sign.innerText = calculate.operator;
  });
});

document.querySelector("#equal").addEventListener("click", (e) => {
  //convert string to number
  let firstInput = Number(calculate.firstInput.join(""));
  let secondInput = Number(calculate.secondInput.join(""));
  calculateNumbers(calculate, firstInput, secondInput);
  console.log(firstInput);
  console.log(secondInput);
  //if(firstInput && secondInput && operator)
});

document.querySelector('#percentage').addEventListener('click', () => {
  let firstInput = Number(calculate.firstInput.join(""));
  let secondInput = (Number(calculate.secondInput.join("")) /100) * firstInput;
  calculateNumbers(calculate, firstInput, secondInput);
  console.log(calculate)
})

document.querySelector('#plusMinus').addEventListener('click', () => {
  if(calculate.secondInput !== '-') calculate.secondInput.unshift('-');
})

document.querySelector("#clear").addEventListener("click", () => {
  clearCalculate();
  clearResult();
});
