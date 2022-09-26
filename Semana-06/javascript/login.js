window.onload = function(){

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailInput = document.getElementById("email-input");
    var errorWarning = document.createElement('p');
    var loginButton = document.getElementById('login-button')
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

    var passwordInput = document.getElementById('password-input');

    passwordInput.onblur = function(){
        var hasNumber = 0;
        var hasLetter = 0;
        for(var i=0; i < passwordInput.value.length; i++ ){
            if(isNaN(passwordInput.value[i])){
                hasLetter += 1;
            }else{
                hasNumber += 1;
            }
        }
        if(hasLetter === 0 || hasNumber === 0 ){
            console.log(hasLetter, hasNumber);
            passwordInput.classList.add('red-border');
            errorWarning.textContent = 'Password most contain more of 4 characters, letters and numbers';
            passwordInput.insertAdjacentElement('afterend', errorWarning);
        }else{
            passwordInput.classList.add('green-border');
        }
    }
    passwordInput.onfocus = function(){
        passwordInput.classList.remove('red-border');
        passwordInput.classList.remove('green-border');
        errorWarning.remove();
    }

    

}