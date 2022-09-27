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
    var singUpBtn = document.getElementById('sing-up-btn');
    var errorWarning = document.createElement('p');
    errorWarning.classList.add("mensage-error");
    var errorAlert = [];

    emailInput.onblur = function(){
        if(emailInput.value == ''){
            emailInput.classList.add('red-border');
            errorWarning.textContent = 'Insert Email';
            emailInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Email error');
        }else if(!emailExpression.test(emailInput.value)){
            emailInput.classList.add('red-border');
            errorWarning.textContent = 'Insert a valid Email';
            emailInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Email error');
        }else{
            emailInput.classList.add('green-border');
        }
    }
    emailInput.onfocus = function(){
        emailInput.value = '';
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
            errorAlert.push('Name error');
        }else if(nameInput.value.length < 3){
            nameInput.classList.add('red-border');
            errorWarning.textContent = 'Enter a name of more than 3 letters';
            nameInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Name error');
        }else if(hasLetter === 0 ){
            nameInput.classList.add('red-border');
            errorWarning.textContent = 'Name can not contain numbers';
            nameInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Name error');
        }else{
            nameInput.classList.add('green-border');
        }
    }
    nameInput.onfocus = function(){
        nameInput.value = '';
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
            errorAlert.push('Last Name error');
        }else if(lastNameInput.value.length < 3){
            lastNameInput.classList.add('red-border');
            errorWarning.textContent = 'Enter a Last Name of more than 3 letters';
            lastNameInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Last Name error');
        }else if(hasLetter === 0 ){
            lastNameInput.classList.add('red-border');
            errorWarning.textContent = 'Last Name can not contain numbers';
            lastNameInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Last Name error');
        }else{
            lastNameInput.classList.add('green-border');
        }
    }
    lastNameInput.onfocus = function(){
        lastNameInput.value = '';
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
            errorAlert.push('Document error');
        }else if(documentInput.value.length < 7){
            documentInput.classList.add('red-border');
            errorWarning.textContent = 'DNI must have more than 7 numbers';
            documentInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Document error');
        }else if(hasLetter === 0 ){
            documentInput.classList.add('red-border');
            errorWarning.textContent = 'DNI can not contain letters';
            documentInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Document error');
        }else{
            documentInput.classList.add('green-border');
        }
    }
    documentInput.onfocus = function(){
        documentInput.value = '';
        documentInput.classList.remove('red-border');
        documentInput.classList.remove('green-border');
        errorWarning.remove();
    }

    dateInput.onblur = function(){
        if(dateInput.value == ''){
            dateInput.classList.add('red-border');
            errorWarning.textContent = 'Insert date';
            dateInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Date error');
        }else{
            documentInput.classList.add('green-border');
        }
    }
    dateInput.onfocus = function(){
        dateInput.value = '';
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
            errorAlert.push('Phone Number error');
        }else if(phoneNumberInput.value.length < 10){
            phoneNumberInput.classList.add('red-border');
            errorWarning.textContent = 'Phone must have more than 10 numbers';
            phoneNumberInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Phone Number error');
        }else if(hasLetter === 0 ){
            phoneNumberInput.classList.add('red-border');
            errorWarning.textContent = 'Phone number can not contain letters';
            phoneNumberInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Phone Number error');
        }else{
            phoneNumberInput.classList.add('green-border');
        }
    }
    phoneNumberInput.onfocus = function(){
        phoneNumberInput.value = '';
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
            errorAlert.push('Location error');
        }else if(hasLetter === 0 || hasNumber === 0 && locationInput.value.length < 3 ){
            locationInput.classList.add('red-border');
            errorWarning.textContent = 'Location most contain more of 3 characters';
            locationInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Location error');
        }else{
            locationInput.classList.add('green-border');
        }
    }
    locationInput.onfocus = function(){
        locationInput.value = '';
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
            errorAlert.push('Postal Code error');
        }else if(postalCodeInput.value.length < 4 || postalCodeInput.value.length > 5 ){
            postalCodeInput.classList.add('red-border');
            errorWarning.textContent = 'Postal Code must have between 4 and 5 numbers';
            postalCodeInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Postal Code error');
        }else if(hasLetter === 0 ){
            postalCodeInput.classList.add('red-border');
            errorWarning.textContent = 'Postal code can not contain letters';
            postalCodeInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Postal Code error');
        }else{
            postalCodeInput.classList.add('green-border');
        }
    }
    postalCodeInput.onfocus = function(){
        postalCodeInput.value = '';
        postalCodeInput.classList.remove('red-border');
        postalCodeInput.classList.remove('green-border');
        errorWarning.remove();
    }

    adressInput.onblur = function(){
        var hasNumber = 0;
        var hasLetter = 0;
        for(var i=0; i < adressInput.value.length; i++ ){
            if(isNaN(adressInput.value[i])){
                hasLetter += 1;
            }else{
                hasNumber += 1;
            }
        }if(adressInput.value == ''){
            adressInput.classList.add('red-border');
            errorWarning.textContent = 'Insert adress';
            adressInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Adress error');
        }else if(!adressInput.value.includes(' ')){
            adressInput.classList.add('red-border');
            errorWarning.textContent = 'Must include space';
            adressInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Adress error');
        }else if(hasLetter === 0 || hasNumber === 0 && adressInput.value.length < 5 ){
            adressInput.classList.add('red-border');
            errorWarning.textContent = 'Adress most contain more of 5 characters';
            adressInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Adress error');
        }else{
            adressInput.classList.add('green-border');
        }
    }
    adressInput.onfocus = function(){
        adressInput.value = '';
        adressInput.classList.remove('red-border');
        adressInput.classList.remove('green-border');
        errorWarning.remove();
    }

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
        if(passwordInput.value == ''){
            passwordInput.classList.add('red-border');
            errorWarning.textContent = 'Insert password';
            passwordInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Password error');
        }else if(hasLetter === 0 || hasNumber === 0 ){
            passwordInput.classList.add('red-border');
            errorWarning.textContent = 'Password most contain more of 4 characters, letters and numbers';
            passwordInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Password error');
        }else{
            passwordInput.classList.add('green-border');
        }
    }
    passwordInput.onfocus = function(){
        passwordInput.value = '';
        passwordInput.classList.remove('red-border');
        passwordInput.classList.remove('green-border');
        errorWarning.remove();
    }

    repeatPasswordInput.onblur = function(){
        if(repeatPasswordInput.value !== passwordInput.value){
            repeatPasswordInput.classList.add('red-border');
            errorWarning.textContent = 'Passwords do not match';
            repeatPasswordInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Repeat Password error');
        }else if(repeatPasswordInput.value == ''){
            repeatPasswordInput.classList.add('red-border');
            errorWarning.textContent = 'Insert password';
            repeatPasswordInput.insertAdjacentElement('afterend', errorWarning);
            errorAlert.push('Repeat Password error');
        }else{
            repeatPasswordInput.classList.add('green-border');
        }
    }
    repeatPasswordInput.onfocus = function(){
        repeatPasswordInput.value = '';
        repeatPasswordInput.classList.remove('red-border');
        repeatPasswordInput.classList.remove('green-border');
        errorWarning.remove();
    }

    singUpBtn.onclick = function(e){
        e.preventDefault();
    }

}