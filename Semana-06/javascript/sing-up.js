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
    var errorEmail;

    emailInput.onblur = function(){
        if(emailInput.value == ''){
            emailInput.classList.add('red-border');
            errorWarning.textContent = 'Insert Email';
            emailInput.insertAdjacentElement('afterend', errorWarning);
            errorEmail = 'Email error';
            errorAlert.push(errorEmail);
        }else if(!emailExpression.test(emailInput.value)){
            emailInput.classList.add('red-border');
            errorWarning.textContent = 'Insert a valid Email';
            emailInput.insertAdjacentElement('afterend', errorWarning);
            errorEmail = 'Email error';
            errorAlert.push(errorEmail);
        }else{
            emailInput.classList.add('green-border');
        }
    }
    emailInput.onfocus = function(){
        emailInput.value = '';
        errorAlert = errorSelector(errorAlert,errorEmail);
        emailInput.classList.remove('red-border');
        emailInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorName;
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
            errorName = 'Name error';
            errorAlert.push(errorName);
        }else if(nameInput.value.length < 3){
            nameInput.classList.add('red-border');
            errorWarning.textContent = 'Enter a name of more than 3 letters';
            nameInput.insertAdjacentElement('afterend', errorWarning);
            errorName = 'Name error';
            errorAlert.push(errorName);
        }else if(hasLetter === 0 ){
            nameInput.classList.add('red-border');
            errorWarning.textContent = 'Name can not contain numbers';
            nameInput.insertAdjacentElement('afterend', errorWarning);
            errorName = 'Name error';
            errorAlert.push(errorName);
        }else{
            nameInput.classList.add('green-border');
        }
    }
    nameInput.onfocus = function(){
        nameInput.value = '';
        errorAlert = errorSelector(errorAlert,errorName);
        nameInput.classList.remove('red-border');
        nameInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorLastName;
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
            errorLastName = 'Last Name error';
            errorAlert.push(errorLastName);
        }else if(lastNameInput.value.length < 3){
            lastNameInput.classList.add('red-border');
            errorWarning.textContent = 'Enter a Last Name of more than 3 letters';
            lastNameInput.insertAdjacentElement('afterend', errorWarning);
            errorLastName = 'Last Name error';
            errorAlert.push(errorLastName);
        }else if(hasLetter === 0 ){
            lastNameInput.classList.add('red-border');
            errorWarning.textContent = 'Last Name can not contain numbers';
            lastNameInput.insertAdjacentElement('afterend', errorWarning);
            errorLastName = 'Last Name error';
            errorAlert.push(errorLastName);
        }else{
            lastNameInput.classList.add('green-border');
        }
    }
    lastNameInput.onfocus = function(){
        lastNameInput.value = '';
        errorAlert = errorSelector(errorAlert,errorLastName);
        lastNameInput.classList.remove('red-border');
        lastNameInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorDni;
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
            errorDni = 'Document error';
            errorAlert.push(errorDni);
        }else if(documentInput.value.length < 7){
            documentInput.classList.add('red-border');
            errorWarning.textContent = 'DNI must have more than 7 numbers';
            documentInput.insertAdjacentElement('afterend', errorWarning);
            errorDni = 'Document error';
            errorAlert.push(errorDni);
        }else if(hasLetter === 0 ){
            documentInput.classList.add('red-border');
            errorWarning.textContent = 'DNI can not contain letters';
            documentInput.insertAdjacentElement('afterend', errorWarning);
            errorDni = 'Document error';
            errorAlert.push(errorDni);
        }else{
            documentInput.classList.add('green-border');
        }
    }
    documentInput.onfocus = function(){
        documentInput.value = '';
        errorAlert = errorSelector(errorAlert,errorDni);
        documentInput.classList.remove('red-border');
        documentInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorDate;
    dateInput.onblur = function(){
        if(dateInput.value == ''){
            dateInput.classList.add('red-border');
            errorWarning.textContent = 'Insert date';
            dateInput.insertAdjacentElement('afterend', errorWarning);
            errorDate = 'Date error';
            errorAlert.push(errorDate);
        }else{
            documentInput.classList.add('green-border');
        }
    }
    dateInput.onfocus = function(){
        dateInput.value = '';
        errorAlert = errorSelector(errorAlert,errorDate);
        dateInput.classList.remove('red-border');
        dateInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorPhone;
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
            errorPhone = 'Phone Number error';
            errorAlert.push(errorPhone);
        }else if(phoneNumberInput.value.length < 10){
            phoneNumberInput.classList.add('red-border');
            errorWarning.textContent = 'Phone must have more than 10 numbers';
            phoneNumberInput.insertAdjacentElement('afterend', errorWarning);
            errorPhone = 'Phone Number error';
            errorAlert.push(errorPhone);
        }else if(hasLetter === 0 ){
            phoneNumberInput.classList.add('red-border');
            errorWarning.textContent = 'Phone number can not contain letters';
            phoneNumberInput.insertAdjacentElement('afterend', errorWarning);
            errorPhone = 'Phone Number error';
            errorAlert.push(errorPhone);
        }else{
            phoneNumberInput.classList.add('green-border');
        }
    }
    phoneNumberInput.onfocus = function(){
        phoneNumberInput.value = '';
        errorAlert = errorSelector(errorAlert,errorPhone);
        phoneNumberInput.classList.remove('red-border');
        phoneNumberInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorLocation;
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
            errorLocation = 'Location error';
            errorAlert.push(errorLocation);
        }else if(hasLetter === 0 || hasNumber === 0 && locationInput.value.length < 3 ){
            locationInput.classList.add('red-border');
            errorWarning.textContent = 'Location most contain more of 3 characters';
            locationInput.insertAdjacentElement('afterend', errorWarning);
            errorLocation = 'Location error';
            errorAlert.push(errorLocation);
        }else{
            locationInput.classList.add('green-border');
        }
    }
    locationInput.onfocus = function(){
        locationInput.value = '';
        errorAlert = errorSelector(errorAlert,errorLocation);
        locationInput.classList.remove('red-border');
        locationInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorPostalCode;
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
            errorPostalCode = 'Postal Code error';
            errorAlert.push(errorPostalCode);
        }else if(postalCodeInput.value.length < 4 || postalCodeInput.value.length > 5 ){
            postalCodeInput.classList.add('red-border');
            errorWarning.textContent = 'Postal Code must have between 4 and 5 numbers';
            postalCodeInput.insertAdjacentElement('afterend', errorWarning);
            errorPostalCode = 'Postal Code error';
            errorAlert.push(errorPostalCode);
        }else if(hasLetter === 0 ){
            postalCodeInput.classList.add('red-border');
            errorWarning.textContent = 'Postal code can not contain letters';
            postalCodeInput.insertAdjacentElement('afterend', errorWarning);
            errorPostalCode = 'Postal Code error';
            errorAlert.push(errorPostalCode);
        }else{
            postalCodeInput.classList.add('green-border');
        }
    }
    postalCodeInput.onfocus = function(){
        postalCodeInput.value = '';
        errorAlert = errorSelector(errorAlert,errorPostalCode);
        postalCodeInput.classList.remove('red-border');
        postalCodeInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorAdress;
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
            errorAdress = 'Adress error';
            errorAlert.push(errorAdress);
        }else if(!adressInput.value.includes(' ')){
            adressInput.classList.add('red-border');
            errorWarning.textContent = 'Must include space';
            adressInput.insertAdjacentElement('afterend', errorWarning);
            errorAdress = 'Adress error';
            errorAlert.push(errorAdress);
        }else if(hasLetter === 0 || hasNumber === 0 && adressInput.value.length < 5 ){
            adressInput.classList.add('red-border');
            errorWarning.textContent = 'Adress most contain more of 5 characters';
            adressInput.insertAdjacentElement('afterend', errorWarning);
            errorAdress = 'Adress error';
            errorAlert.push(errorAdress);
        }else{
            adressInput.classList.add('green-border');
        }
    }
    adressInput.onfocus = function(){
        adressInput.value = '';
        errorAlert = errorSelector(errorAlert,errorAdress);
        adressInput.classList.remove('red-border');
        adressInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorPassword;
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
            errorPassword = 'Password error';
            errorAlert.push(errorPassword);
        }else if(hasLetter === 0 || hasNumber === 0 ){
            passwordInput.classList.add('red-border');
            errorWarning.textContent = 'Password most contain more of 4 characters, letters and numbers';
            passwordInput.insertAdjacentElement('afterend', errorWarning);
            errorPassword = 'Password error';
            errorAlert.push(errorPassword);
        }else{
            passwordInput.classList.add('green-border');
        }
    }
    passwordInput.onfocus = function(){
        passwordInput.value = '';
        errorAlert = errorSelector(errorAlert,errorPassword);
        passwordInput.classList.remove('red-border');
        passwordInput.classList.remove('green-border');
        errorWarning.remove();
    }
    
    var errorRepeatPassword;
    repeatPasswordInput.onblur = function(){
        if(repeatPasswordInput.value !== passwordInput.value){
            repeatPasswordInput.classList.add('red-border');
            errorWarning.textContent = 'Passwords do not match';
            repeatPasswordInput.insertAdjacentElement('afterend', errorWarning);
            errorRepeatPassword = 'Repeat Password error';
            errorAlert.push(errorRepeatPassword);
        }else if(repeatPasswordInput.value == ''){
            repeatPasswordInput.classList.add('red-border');
            errorWarning.textContent = 'Insert password';
            repeatPasswordInput.insertAdjacentElement('afterend', errorWarning);
            errorRepeatPassword = 'Repeat Password error';
            errorAlert.push(errorRepeatPassword);
        }else{
            repeatPasswordInput.classList.add('green-border');
        }
    }
    repeatPasswordInput.onfocus = function(){
        repeatPasswordInput.value = '';
        errorAlert = errorSelector(errorAlert,errorRepeatPassword);
        repeatPasswordInput.classList.remove('red-border');
        repeatPasswordInput.classList.remove('green-border');
        errorWarning.remove();
    }

    var errorSelector = function(errorAlert,error ){
        var saveError = [];
        for(var i =0 ; i< errorAlert.length; i++){
            if(errorAlert[i] != error){
                saveError.push(errorAlert[i]);
            }
        }
        return saveError;
    }

    singUpBtn.onclick = function(e){
        e.preventDefault();
        if(errorAlert.length === 0){
            alert('Register Succesfuly: ' + 'Name: ' + nameInput.value + '\n' + 
            'Last Name: ' + lastNameInput.value + '\n' +
            'DNI: ' + documentInput.value + '\n' +
            'Date: ' + dateInput.value + '\n' +
            'Phone number: ' + phoneNumberInput.value + '\n' +
            'Adress: ' + adressInput.value + '\n' +
            'Location: ' + locationInput.value + '\n' +
            'Postal code: ' + postalCodeInput.value + '\n' +
            'Email: ' + emailInput.value + '\n' +
            'Password: ' + passwordInput.value + '\n' +
            'Repeat password: ' + repeatPasswordInput.value);
        }else{
            alert(errorAlert.join('-'));
            console.log(errorAlert);
            return;
        }
    }

}