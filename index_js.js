// 3. The calculate() function does the following:
//     - Grab the first operand from the input with id "x"
//     - Grab the second operand from the input with id "y"
//     - Perform the operation based on the operator
//     - Display the result in the div with id "result"

function calculate(operator) {
    x = document.getElementById('operand1');
    y = document.getElementById('operand2');

    x = parseInt(x.value);
    y = parseInt(y.value);

    switch (operator) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        default:
            console.log("operator error");
    }
    show_result.textContent = result;
    return result
}

// 1. We get all the buttons with the "operator" class and store them in the buttons variable.
buttons = document.getElementsByClassName('operator');
show_result = document.getElementById('result');

// 2. Then we loop through all the buttons and add an event listener to each button. This event listener will call the calculate() function when the button is clicked.
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var operator = this.textContent;
        calculate(operator);
    });
}



// 4. Notice that we have to parse the operands into integers before performing the operation. This is because the value of an input is always a string.
// 5. Finally, we have a switch statement that performs the operation based on the operator. 

