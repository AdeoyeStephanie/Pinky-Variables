

// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = ''; // clears the display
}

// Function to append clicked button value to the display
function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value; // appends the clicked value to the display
}

// Function to calculate the result based on the input expression
function calculate() {
  const display = document.getElementById('display');
  let expression = display.value;

  // Replace 'x' with '*' for multiplication
  expression = expression.replace(/x/g, '*');

  // Use try-catch to avoid crashes due to invalid expressions
  try {
      display.value = eval(expression); // evaluate the expression and show result
  } catch (error) {
      display.value = 'Error'; // handle any error in expression
  }
}

// Function to delete the last character from the display
function deleteOneCharacter() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1); // remove the last character
}