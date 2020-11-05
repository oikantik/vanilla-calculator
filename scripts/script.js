class Calculator {
  constructor() {
    this.firstInput = [];
    this.secondInput = [];
    this.operator = null;
    this.firstNumber = document.querySelector("#first-number");
    this.secondNumber = document.querySelector("#last-number");
    this.resultNumber = document.querySelector("#result");
    this.sign = document.querySelector("#sign");
    this.numbers = document.querySelectorAll("#number");
    this.operators = document.querySelectorAll("#operator");
    this.equal = document.querySelector("#equal");
    this.percentage = document.querySelector("#percentage");
    this.plusMinus = document.querySelector("#plusMinus");
    this.clear = document.querySelector("#clear");
  }

  clearCalculate() {
    this.firstInput = [];
    this.secondInput = [];
    this.operator = null;
  }

  clearResult() {
    this.firstNumber.innerText = "FIRST NUMBER";
    this.sign.innerText = "+";
    this.secondNumber.innerText = "LAST NUMBER";
    this.resultNumber.innerText = "RESULT";
  }

  calculateNumbers(firstInput, secondInput) {
    let result;
    switch (this.operator) {
      case "+":
        result = firstInput + secondInput;
        console.log(result);
        this.resultNumber.innerText = result;
        break;

      case "-":
        result = firstInput - secondInput;
        this.resultNumber.innerText = result;
        break;

      case "×":
        result = firstInput * secondInput;
        this.resultNumber.innerText = result;
        break;

      case "÷":
        result = firstInput / secondInput;
        result && (this.resultNumber.innerText = result);
        break;

      default:
        break;
    }
  }

  addToFirstNumber(number) {
    this.firstInput.push(number);
    this.firstNumber.innerText = this.firstInput.join("");
  }

  addToSecondNumber(number) {
    this.secondInput.push(number);
    this.secondNumber.innerText = this.secondInput.join("");
  }

  assignOperator(operator) {
    this.operator = operator;
    this.sign.innerText = this.operator;
  }

  getResult() {
    let firstInput = Number(this.firstInput.join(""));
    let secondInput = Number(this.secondInput.join(""));
    this.calculateNumbers(firstInput, secondInput);
  }

  getResultOnPercentage() {
    let firstInput = Number(this.firstInput.join(""));
    let secondInput = (Number(this.secondInput.join("")) / 100) * firstInput;
    this.calculateNumbers(firstInput, secondInput);
  }

  plusMinusHandler() {
    if (this.secondInput[0] !== "-") {
      this.secondInput.unshift("-");
      this.secondNumber.innerText = this.secondInput.join("");
    } else if (this.secondInput[0] === "-") {
      this.secondInput.shift();
      this.secondNumber.innerText = this.secondInput.join("");
    }
  }
}

let calculator = new Calculator();

calculator.numbers.forEach((element) => {
  element.addEventListener("click", (e) => {
    // if first input is null, put a number
    if (!calculator.operator) {
      calculator.clearResult();
      calculator.addToFirstNumber(e.target.innerText);
    }
    if (calculator.operator) {
      calculator.addToSecondNumber(e.target.innerText);
    }
  });
});

calculator.operators.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (calculator.firstInput.length)
      calculator.assignOperator(e.target.innerText);
  });
});

calculator.equal.addEventListener("click", (e) => {
  //convert string to number
  calculator.getResult();
  //if(firstInput && secondInput && operator)
});

calculator.percentage.addEventListener("click", () => {
  calculator.getResultOnPercentage();
});

calculator.plusMinus.addEventListener("click", () => {
  calculator.plusMinusHandler();
});

calculator.clear.addEventListener("click", () => {
  calculator.clearResult();
  calculator.clearCalculate();
});
