const operator = prompt('Enter operator (+, -, /, *)');
        const num1 = parseFloat(prompt('Enter first number: '));
        const num2 = parseFloat(prompt('Enter second number: '));
        let result = 0;
        if(isNaN(num1) || isNaN(num2)){
            alert('Wrong Input! Refresh the page and provide data')
        }else{
            if(operator == '+'){
                result = num1 + num2;
            }else if(operator == '-'){
                result = num1 - num2;
            }else if(operator == '*'){
                result = num1 * num2;
            }else if(operator == '/'){
                result = num1 / num2;
            }
            alert('The result is : ' + result);
        }