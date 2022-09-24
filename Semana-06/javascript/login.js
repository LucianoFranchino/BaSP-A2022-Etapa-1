window.onload = function(){

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    var emailInput = document.getElementById("email-input");
    emailInput.onfocus = function(emailExpression){
        emailInput.classList.add("green-border");
    }

    

    

}