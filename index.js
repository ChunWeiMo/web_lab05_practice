// 1. We get all the buttons with the "operator" class and store them in the buttons variable.
buttons = "";
buttons = document.getElementsByClassName('.operator');

// 2. Then we loop through all the buttons and add an event listener to each button. This event listener will call the calculate() function when the button is clicked.
function calculate() {
    alert("click");
}

// for (i = 0; i < 4; i++) {
//     button = buttons[i].addEventListener('click', function calculate() {
//         x = document.getElementById('#operand1')
//         y = document.getElementById('#operand2')
//     })
// }

var x = 0;
var y = 0;

function calculate(operator) {
    x = document.getElementById('operand1');
    y = document.getElementById('operand2');

    x = parseFloat(x.value);
    y = parseFloat(y.value);

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
    return result
}

result.value = calculate("+")
console.log(x);
console.log(y);
console.log(result);
// 3. The calculate() function does the following:
//     - Grab the first operand from the input with id "x"
//     - Grab the second operand from the input with id "y"
//     - Perform the operation based on the operator
//     - Display the result in the div with id "result"
// 4. Notice that we have to parse the operands into integers before performing the operation. This is because the value of an input is always a string.
// 5. Finally, we have a switch statement that performs the operation based on the operator. 

