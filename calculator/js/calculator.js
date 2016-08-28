// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var operatorsExtend = ['+', '-', 'x', '÷', '%', '(', ')', '<sup>2</sup>√', 'x!', '<sup>2</sup>', '<sup>3</sup>'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		console.log("inputVal=" + inputVal);
		console.log("btnVal=" + btnVal);
		
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}

		// If it is factorial
		else if(btnVal == 'x!') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];

			if (inputVal.length > 0 && operators.indexOf(lastChar) < 0) {
				input.innerHTML += btnVal.replace('x!', '!');
			}
			
			decimalAdded = false;
		}

		// If it is square
		else if(btnVal == 'x<sup>2</sup>') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];

			if (inputVal.length > 0 && operators.indexOf(lastChar) < 0) {
				input.innerHTML += btnVal.replace('x\<sup\>2\<\/sup\>', '<sup\>2\<\/sup\>');
			}
			
			decimalAdded = false;
		}

		// If it is cube
		else if(btnVal == 'x<sup>3</sup>') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];

			if (inputVal.length > 0 && operators.indexOf(lastChar) < 0) {
				input.innerHTML += btnVal.replace('x\<sup\>3\<\/sup\>', '<sup\>3\<\/sup\>');
			}
			
			decimalAdded = false;
		}

		// If it is square root
		else if(btnVal == '<sup>2</sup>√' || btnVal == '%' || btnVal == '(' || btnVal == ')') {
			input.innerHTML += btnVal;
			decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			var isFac = equation.indexOf('!');
			if (isFac > 0) {
				//var numFac = equation[isFac - 1];
				var numFac = getLastNumber(operatorsExtend, equation, isFac);
				var rval = factorial(numFac);
				equation = equation.replace(numFac+'!', rval);
			}

			var isSquareRoot = equation.indexOf('<sup>2</sup>√');
			if (isSquareRoot >= 0) {
				var numSquareRoot = equation.substring(equation.indexOf('√')+1);
				var rval = squareRoot(numSquareRoot);

				console.log("numSquareRoot=" + numSquareRoot);
				
				equation = equation.replace('\<sup\>2\<\/sup\>√'+numSquareRoot, rval);
			} else {

				var isSquare = equation.indexOf('<sup>2</sup>');
				if (isSquare > 0) {
					var numSquare = getLastNumber(operatorsExtend, equation, isSquare);
					var rval = square(numSquare);
					equation = equation.replace(numSquare+'\<sup\>2\<\/sup\>', rval);
				}
			}

			var isCube = equation.indexOf('<sup>3</sup>');
			if (isCube > 0) {
				var numCube = getLastNumber(operatorsExtend, equation, isCube);
				var rval = cube(numCube);

				equation = equation.replace(numCube+'\<sup\>3\<\/sup\>', rval);
			}

			var isPerCent = equation.indexOf('%');
			
			if (isPerCent > 0) {
				var numPerCent = getLastNumber(operatorsExtend, equation, isPerCent);
				var rval = percent(numPerCent);

				equation = equation.replace(numPerCent+'%', rval);
			}

			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}

		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}

//Calculate n!
function factorial(n) {
   var rval=1;
    for (var i = 2; i <= n; i++) {
        rval = rval * i;
    }
    return rval;
}

//Calculate n^2
function square(n) {
	return n * n;
}

//Calculate n^3
function cube(n) {
	return n * n * n;
}

//Calculate √n
function squareRoot(n) {
	return Math.sqrt(n);
}

//Calculate n%
function percent(n) {
	return n / 100;
}

//Get number to calculate
function getLastNumber(operatorsExtend, equation, lastIndex) {
	var start = -1;
	for(var i = 0; i < operatorsExtend.length; i++) {
		var temp = equation.indexOf(operatorsExtend[i]);
		if (temp > 0 && temp != lastIndex) {
			start = temp;
		}
	}
	return equation.substring(start+1, lastIndex);
}