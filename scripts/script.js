let calculate = {
  firstInput: [],
  secondInput: [],
  operator: null
};

document.querySelectorAll('#number').forEach(element => {
    element.addEventListener('click', (e)=> {
        console.log(e.target.innerText);
        // if first input is null, put a number
        if(!calculate.operator) calculate.firstInput.push(e.target.innerText);
        if(calculate.operator) calculate.secondInput.push(e.target.innerText)
        console.log(calculate)

    })
})

document.querySelectorAll('#operator').forEach(element => {
  element.addEventListener('click', (e)=> {
      console.log(e.target.innerText);
      calculate.operator = e.target.innerText;
  })
})

document.querySelector('#equal').addEventListener('click', (e)=> {

  //convert string to number 
  let firstInput = Number(calculate.firstInput.join(""));
  let secondInput = Number(calculate.secondInput.join(""));
  let result;
  switch(calculate.operator) {
    case '+': 
      result = firstInput + secondInput;
      break;

      case '-': 
      result = firstInput - secondInput;
      break;

      case 'x': 
      result = firstInput * secondInput;
      break;

      case '÷': 
      result = firstInput / secondInput;
      break;

    default:
      break;
  }
  console.log(firstInput)
  console.log(secondInput)
  console.log(result)
      //if(firstInput && secondInput && operator) 
})