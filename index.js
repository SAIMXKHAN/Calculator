// Calculator
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
};
function clearDisplay() {
  display.value = "";
  display.placeholder = ""
};

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
};

function calculate() {
  try {
    const sanitizedValue = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    const result = eval(sanitizedValue);
   
    if (display.value.includes("0÷0") || result === Infinity || result === -Infinity) {
      display.value = "";
      display.placeholder = "Error: Invalid operation";
    }else if (isNaN(result)) {
        display.value = "";
        display.placeholder = ""; 
    }
    else {
      display.value = result;
      display.placeholder = "";
    }
    } catch (error) {
    display.value = "";
    display.placeholder = "";
  }
};

function appendToDisplay(input) {
  const lastChar = display.value.slice(-1);
  const operators = ["+", "-", "*", "/", "."];

  if (operators.includes(lastChar) && operators.includes(input)) {
    return;
  }if (display.value === "" || display.placeholder !== "") {
    display.value = input;
    display.placeholder = "";
  }else {
    display.value += input;
  }
};