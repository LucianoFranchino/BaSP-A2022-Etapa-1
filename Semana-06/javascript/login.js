window.onload = function(){

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailInput = document.getElementById("email-input");
    var errorWarning = document.createElement('p');
    errorWarning.classList.add("mensage-error");

    emailInput.onblur = function(){
        if(emailInput.value == ''){
            emailInput.classList.add('red-border');
            errorWarning.textContent = 'Insert Email'
            emailInput.insertAdjacentElement('afterend', errorWarning);
        }else if(!emailExpression.test(emailInput.value)){
            emailInput.classList.add('red-border');
            errorWarning.textContent = 'Insert a valid Email';
            emailInput.insertAdjacentElement('afterend', errorWarning);
        }else{
            emailInput.classList.add('green-border');
        }
    }
    emailInput.onfocus = function(){
        emailInput.classList.remove('red-border');
        emailInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'Y', 'J', 'K', 'L', 'M', 'N', 
    'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
    var isNumber = false;
    var isLetter = false;
    var passwordInput = document.getElementById('password-input');
    var errorWarningPassword = document.createElement('p');
    errorWarningPassword.classList.add('mesage-error');

    passwordInput.onblur = function(){
        for(var i= 0; i<passwordInput.value.length; i++){
            for(var j=0; j<numbers.value.length; j++){
                if(passwordInput[i] == numbers[j]){
                    isNumber=true;
                    console.log(passwordInput[i],'es numero');
                }
            }
        }
        for(var i= 0; i<passwordInput.value.length; i++){
            for(var j=0; j<letters.value.length; j++){
                if(passwordInput[i] == letters[j]){
                    isLetter=true;
                    console.log(passwordInput[j],'es letra');
                }    
            }
        }
        if(passwordInput.value <= 4){
            passwordInput.classList.add('red-border');
            errorWarningPassword.textContent = 'Password most contain more of 4 characters';
            passwordInput.insertAdjacentElement('afterend', errorWarningPassword);
        }else if(!numbers(passwordInput.value)){
            passwordInput.classList.add('red-border');
            errorWarningPassword.textContent = 'Password most contain one number';
            passwordInput.insertAdjacentElement('afterend', errorWarningPassword);
        }
        
    }
}