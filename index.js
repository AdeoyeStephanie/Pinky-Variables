//PINKY VARIABLES
// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = ''; // Clears the display
}

// Function to append clicked button value to the display
function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value; // Appends the clicked value to the display
}

// Function to calculate the result based on the input expression
function calculate() {
  const display = document.getElementById('display');
  let expression = display.value;

  // Replace 'x' with '*' for multiplication
  expression = expression.replace(/x/g, '*');

  // Validate and calculate the expression
  try {
      display.value = eval(expression); // Evaluate the expression and display the result
  } catch (error) {
      display.value = 'Error'; // Handle any errors in expression
  }
}

// Function to delete the last character from the display
function deleteOneCharacter() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1); // Remove the last character
}