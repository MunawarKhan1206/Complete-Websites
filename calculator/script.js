const inputBox = document.getElementById('inputBox');

function appendToInput(value) {
    inputBox.value += value;
}

function appendOperator(operator) {
    let lastChar = inputBox.value.slice(-1);
    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/' && lastChar !== '.') {
        inputBox.value += operator;
    }
}

function clearInput() {
    inputBox.value = '';
}

function deleteLast() {
    inputBox.value = inputBox.value.slice(0, -1);
}

function calculate() {
    let expression = inputBox.value;
    // Regular expression to match valid mathematical expressions
    let regex = /^[0-9+\-*/.()]+$/;
    
    if (!regex.test(expression)) {
        inputBox.value = 'Error';
        return;
    }

    try {
        // Using Function constructor to evaluate the expression
        let result = evaluateExpression(expression);
        inputBox.value = result;
    } catch (error) {
        inputBox.value = 'Error';
    }
}

function evaluateExpression(expression) {
    let output = [];
    let operators = [];

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (char === ' ') {
            continue;
        }

        if (char === '(') {
            operators.push(char);
        } else if (char === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                output.push(operators.pop());
            }
            operators.pop();
        } else if (isOperator(char)) {
            while (operators.length && precedence(operators[operators.length - 1]) >= precedence(char)) {
                output.push(operators.pop());
            }
            operators.push(char);
        } else {
            let num = '';
            while (i < expression.length && !isOperator(expression[i]) && expression[i] !== '(' && expression[i] !== ')') {
                num += expression[i++];
            }
            i--;
            output.push(num);
        }
    }

    while (operators.length) {
        output.push(operators.pop());
    }

    let stack = [];

    for (let token of output) {
        if (isOperator(token)) {
            let b = parseFloat(stack.pop());
            let a = parseFloat(stack.pop());

            if (token === '+') {
                stack.push(a + b);
            } else if (token === '-') {
                stack.push(a - b);
            } else if (token === '*') {
                stack.push(a * b);
            } else if (token === '/') {
                if (b === 0) {
                    throw new Error('Division by zero');
                }
                stack.push(a / b);
            }
        } else {
            stack.push(token);
        }
    }

    return stack[0];
}

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

function precedence(operator) {
    if (operator === '+' || operator === '-') {
        return 1;
    } else if (operator === '*' || operator === '/') {
        return 2;
    }
    return 0;
}
