function emptyFields(inputField,helpText){
    if (inputField.value.length == 0){
        if (helpText != null)
            helpText.innerHTML="Please place a message";
        return false;
         
    } else {
        if (helpText != null)
            helpText.innerHTML = "";
        return true;
    }
}

function validateLength(minLength, maxLength, inputField, helpText){
    if(inputField.value.length < minLength || inputField.value.length > maxLength ){
        helpText.innerHTML = 'Please place between' + minLength + 'and ' + maxLength + ' of characters!';
    return false;
    } else {
        if (helpText != null)
            helpText.innerHTML = '';
    return true;    
    
    }
        
}

function validateZip(inputField, helptext){
    if(inputField.value.length != 5){
        helptext.innerHTML = "Please place 5 numbers";
    return false;
    } else if (isNaN(inputField.value)){
        helptext.innerHTML = "Place numers instead of letters";
    return false;
    } else {
        if (helptext != null)
        helptext.innerHTML = "";
     return true;
     
    }

}

function placeOrder(form){
    if(emptyFields(form["name"],form["nameError"]) && 
       validateLength(1,32,form["message"], form["messageError"]) && 
       validateZip(form["zipcode"],form["zipError"])
       ){
        form.submit();
    } else {
        alert("Please validate the fields");
       } 
}

function validateRegEx(regex, inputStr, helptext, helpmessage){
    if (!regex.test(inputStr)){
        if(helptext != null)
            helptext.innerHTML = "Please fill in a date";
        return false;
    } else {
        if (helptext != null)
            helptext.innerHTML = "";
        return true;
    }
}


function validateDate(inputField,helptext){
    if (!emptyFields(inputField,helptext))
        return false;
    return validateRegEx(/^\d{2}\/\d{2}\/\d{4}$/,inputField.value, helptext, "Please fill in a useable dateformat");

}