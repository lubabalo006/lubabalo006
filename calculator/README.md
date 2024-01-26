# Calculator App

## Overview
The Calculator App is a simple web-based calculator that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Users can input numbers, perform calculations, and see the result displayed in real-time.

## Features
- **Basic Operations:** Supports addition, subtraction, multiplication, and division.
- **Real-Time Updates:** Displays input and calculation results in real-time.
- **Clear and Delete:** Allows users to clear the current input or delete the last digit.
- **All Clear:** Resets the calculator to its initial state.

## Components
### `Calculator` Class
- **Constructor:** Initializes the calculator with previous and current number text elements and clears the calculator.
- **`clear()`:** Clears the current input and operation.
- **`delete()`:** Deletes the last digit of the current input.
- **`appendNumber(number)`:** Appends a number to the current input.
- **`chooseOperation(operation)`:** Selects an operation (+, -, *, /) and prepares for computation.
- **`compute()`:** Performs the selected operation and updates the current number.
- **`getDisplayNumber(number)`:** Formats the number for display with commas and decimal points.
- **`updateDisplay()`:** Updates the display with the current input and operation.

## Event Handling
- **Number Buttons:** Event listeners are added to each number button to append the corresponding number to the input.
- **Operation Buttons:** Event listeners are added to each operation button to select the operation and update the display.
- **Equals Button:** Event listener is added to the equals button to perform the computation and update the display.
- **All Clear Button:** Event listener is added to the all clear button to clear the calculator.
- **Delete Button:** Event listener is added to the delete button to delete the last digit of the input.

## Usage
- Users can input numbers using the number buttons.
- Users can select an operation using the operation buttons.
- Users can perform calculations by clicking the equals button.
- Users can clear the current input or reset the calculator using the clear buttons.
- Calculation results are displayed in real-time.
