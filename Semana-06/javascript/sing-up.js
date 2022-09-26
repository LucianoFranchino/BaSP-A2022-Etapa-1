/*
Nombre: Solo letras y debe tener más de 3 letras.
Apellido: Solo letras y debe tener más de 3 letras. 
DNI: Solo número y debe tener más de 7 números. 
Fecha de Nacimiento: Con formato dd/mm/aaaa.
Teléfono: Solo número y debe tener 10 números.
Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
Localidad: Texto alfanumérico y debe tener más de 3 letras. 
Código Postal: Solo número y debe tener entre 4 y 5 números. 
Email: Debe tener un formato de email válido.
Contraseña: Al menos 8 caracteres, formados por letras y números.
Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.
*/ 

window.onload = function(){
    
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var nameInput = document.getElementById('name');
    var lastNameInput = document.getElementById('lastName');
    var documentInput = document.getElementById('dni');
    var dateInput = document.getElementById('date');
    var phoneNumberInput = document.getElementById('phone');
    var adressInput = document.getElementById('adress');
    var locationInput = document.getElementById('location');
    var passwordInput = document.getElementById('password');
    var repeatPasswordInput = document.getElementById('re-password');
    var postalCodeInput = document.getElementById('postalCode');
    var emailInput = document.getElementById('email');
    var errorWarning = document.createElement('p');
    errorWarning.classList.add("mensage-error");

    emailInput.onblur = function(){
        if(emailInput.value == ''){
            emailInput.classList.add('red-border');
            errorWarning.textContent = 'Insert Email';
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

    nameInput.onblur = function(){
        var hasLetter = 0;
        for(var i=0; i < nameInput.value.length; i++ ){
            if(isNaN(nameInput.value[i])){
                hasLetter += 1;
            }
        }
        if(nameInput.value == ''){
            nameInput.classList.add('red-border');
            errorWarning.textContent = 'Insert a name';
            nameInput.insertAdjacentElement('afterend', errorWarning);
        }else if(nameInput.value.length < 3){
            nameInput.classList.add('red-border');
            errorWarning.textContent = 'Enter a name of more than 3 letters';
            nameInput.insertAdjacentElement('afterend', errorWarning);
        }else if(hasLetter === 0 ){
            nameInput.classList.add('red-border');
            errorWarning.textContent = 'Name can not contain numbers';
            nameInput.insertAdjacentElement('afterend', errorWarning);
        }else{
            nameInput.classList.add('green-border');
        }
    }
    nameInput.onfocus = function(){
        nameInput.classList.remove('red-border');
        nameInput.classList.remove('green-border');
        errorWarning.remove();
    }

    lastNameInput.onblur = function(){
        var hasLetter = 0;
        for(var i=0; i < lastNameInput.value.length; i++ ){
            if(isNaN(lastNameInput.value[i])){
                hasLetter += 1;
            }
        }
        if(lastNameInput.value == ''){
            lastNameInput.classList.add('red-border');
            errorWarning.textContent = 'Insert a Last Name';
            lastNameInput.insertAdjacentElement('afterend', errorWarning);
        }else if(lastNameInput.value.length < 3){
            lastNameInput.classList.add('red-border');
            errorWarning.textContent = 'Enter a Last Name of more than 3 letters';
            lastNameInput.insertAdjacentElement('afterend', errorWarning);
        }else if(hasLetter === 0 ){
            lastNameInput.classList.add('red-border');
            errorWarning.textContent = 'Last Name can not contain numbers';
            lastNameInput.insertAdjacentElement('afterend', errorWarning);
        }else{
            lastNameInput.classList.add('green-border');
        }
    }
    lastNameInput.onfocus = function(){
        lastNameInput.classList.remove('red-border');
        lastNameInput.classList.remove('green-border');
        errorWarning.remove();
    }

    documentInput.onblur = function(){
        var hasLetter = 0;
        for(var i=0; i < documentInput.value.length; i++ ){
            if(!isNaN(documentInput.value[i])){
                hasLetter += 1;
            }
        }
        if(documentInput.value == ''){
            documentInput.classList.add('red-border');
            errorWarning.textContent = 'Insert DNI';
            documentInput.insertAdjacentElement('afterend', errorWarning);
        }else if(documentInput.value.length < 7){
            documentInput.classList.add('red-border');
            errorWarning.textContent = 'DNI must have more than 7 numbers';
            documentInput.insertAdjacentElement('afterend', errorWarning);
        }else if(hasLetter === 0 ){
            documentInput.classList.add('red-border');
            errorWarning.textContent = 'DNI can not contain letters';
            documentInput.insertAdjacentElement('afterend', errorWarning);
        }else{
            documentInput.classList.add('green-border');
        }
    }
    documentInput.onfocus = function(){
        documentInput.classList.remove('red-border');
        documentInput.classList.remove('green-border');
        errorWarning.remove();
    }

    dateInput.onblur = function(){
        if(dateInput.value == ''){
            dateInput.classList.add('red-border');
            errorWarning.textContent = 'Insert date';
            dateInput.insertAdjacentElement('afterend', errorWarning);
        }else{
            documentInput.classList.add('green-border');
        }
    }
    dateInput.onfocus = function(){
        dateInput.classList.remove('red-border');
        dateInput.classList.remove('green-border');
        errorWarning.remove();
    }

    phoneNumberInput.onblur = function(){
        var hasLetter = 0;
        for(var i=0; i < phoneNumberInput.value.length; i++ ){
            if(!isNaN(phoneNumberInput.value[i])){
                hasLetter += 1;
            }
        }
        if(phoneNumberInput.value == ''){
            phoneNumberInput.classList.add('red-border');
            errorWarning.textContent = 'Insert phone number';
            phoneNumberInput.insertAdjacentElement('afterend', errorWarning);
        }else if(phoneNumberInput.value.length < 10){
            phoneNumberInput.classList.add('red-border');
            errorWarning.textContent = 'Phone must have more than 10 numbers';
            phoneNumberInput.insertAdjacentElement('afterend', errorWarning);
        }else if(hasLetter === 0 ){
            phoneNumberInput.classList.add('red-border');
            errorWarning.textContent = 'Phone number can not contain letters';
            phoneNumberInput.insertAdjacentElement('afterend', errorWarning);
        }else{
            phoneNumberInput.classList.add('green-border');
        }
    }
    phoneNumberInput.onfocus = function(){
        phoneNumberInput.classList.remove('red-border');
        phoneNumberInput.classList.remove('green-border');
        errorWarning.remove();
    }

    locationInput.onblur = function(){
        var hasNumber = 0;
        var hasLetter = 0;
        for(var i=0; i < locationInput.value.length; i++ ){
            if(isNaN(locationInput.value[i])){
                hasLetter += 1;
            }else{
                hasNumber += 1;
            }
        }
        if(locationInput.value == ''){
            locationInput.classList.add('red-border');
            errorWarning.textContent = 'Insert location';
            locationInput.insertAdjacentElement('afterend', errorWarning);
        }else if(hasLetter === 0 || hasNumber === 0 && locationInput.value.length < 3 ){
            locationInput.classList.add('red-border');
            errorWarning.textContent = 'Location most contain more of 3 characters';
            locationInput.insertAdjacentElement('afterend', errorWarning);
        }else{
            locationInput.classList.add('green-border');
        }
    }
    locationInput.onfocus = function(){
        locationInput.classList.remove('red-border');
        locationInput.classList.remove('green-border');
        errorWarning.remove();
    }

    postalCodeInput.onblur = function(){
        var hasLetter = 0;
        for(var i=0; i < postalCodeInput.value.length; i++ ){
            if(!isNaN(postalCodeInput.value[i])){
                hasLetter += 1;
            }
        }
        if(postalCodeInput.value == ''){
            postalCodeInput.classList.add('red-border');
            errorWarning.textContent = 'Insert Postal Code';
            postalCodeInput.insertAdjacentElement('afterend', errorWarning);
        }else if(postalCodeInput.value.length >=4 <= 5){
            postalCodeInput.classList.add('red-border');
            errorWarning.textContent = 'Postal Code must have between 4 and 5 numbers';
            postalCodeInput.insertAdjacentElement('afterend', errorWarning);
        }else if(hasLetter === 0 ){
            postalCodeInput.classList.add('red-border');
            errorWarning.textContent = 'Postal code can not contain letters';
            postalCodeInput.insertAdjacentElement('afterend', errorWarning);
        }else{
            postalCodeInput.classList.add('green-border');
        }
    }
    postalCodeInput.onfocus = function(){
        postalCodeInput.classList.remove('red-border');
        postalCodeInput.classList.remove('green-border');
        errorWarning.remove();
    }
}