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

function validatePhone(inputField,helptext){
    if (!emptyFields(inputField,helptext))
        return false;
    return validateRegEx(/^\d{4}-\d{6}$/,inputField.value,helptext, "Please fill in a proper phonenumber");

}


function validateEmail(inputField,helptext){
    if(!emptyFields(inputField,helptext))
        return false;
    return validateRegEx(/^\w+@\w+.\w{2,3}$/,inputField.value,helptext,"Please fill in a proper emailadres")
}

Date.prototype.shortFormat = function(){
    return (this.getMonth() + 1) + "/" + this.getDate() + "/" + this.getFullYear();
}

function Blog(body, date, image){
    this.body = body;
    this.date = date;
    this.image = image;
}

Blog.prototype.signature = "Albert Lamme";

Blog.prototype.toString = function() {
  return "[" + (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" +
    this.date.getFullYear() + "] " + this.body;
};

Blog.prototype.toHTML = function(highlight) {
  // Use a gray background as a highlight, if specified
  var blogHTML = "";
  blogHTML += highlight ? "<p style='background-color:#EEEEEE'>" : "<p>";

  // Generate the formatted blog HTML code
  if (this.image){
    blogHTML += "<strong>" + this.date.shortFormat() + "</strong><br /><img src='"+ this.image + "'/>" + this.body + "<br /><em>"+ this.signature +"</em></p>";
  } else {
    blogHTML += "<strong>" + this.date.shortFormat() + "</strong><br />" + this.body + "<br /><em>"+ this.signature +"</em></p>";
  }
  return blogHTML;
};

Blog.prototype.containsText = function(text) {
  return (this.body.toLowerCase().indexOf(text.toLowerCase()) != -1);
};


var blog = [new Blog("Got the new cube i ordered",new Date ("08/14/2008"),"images/cube777.png"),
            new Blog("Solved the new cube but of course",new Date ("08/19/2008"),"images/cube777.png"),
            new Blog("Managed to get a headache toiling",new Date ("08/16/2008"),"images/cube777.png"),
            new Blog("Found a 7x7x7 cube for sale online",new Date ("08/21/2008"),"images/cube777.png")
           ];
           
function showBlog(numEntries){
    blog.sort(function(blog1, blog2) { return blog2.date - blog1.date; });
    if (!numEntries)
        numEntries = blog.length;
    var i = 0, blogText = "";
    while (i < blog.length && i < numEntries) {
          blogText += blog[i].toHTML(i % 2 == 0);
          i++;
        }
    
    document.getElementById("blog").innerHTML= blogText;
}


function getDaysBetween(date1,date2){

    var daysBetween = (date2 - date1) / (1000 *60 * 60 *24);
    return Math.round(daysBetween);
}


function searchBlog(){

    var searchText = document.getElementById("searchtext").value;
    
    for (var i=0; i < blog.length; i++){
        if (blog[i].containsText(searchText)) {
            alert(blog[i]);
            break;
          }
    }
    
    if (i == blog.length){
        alert ("Sorry, there was no serch found");
    }
    
}

function randomBlog(){
    var i = Math.floor(Math.random() * blog.length);
        alert(blog[i]);


}