function touchRock(){
    var userName = prompt("What is your name","Type in your name");
    
    if(userName){
        alert("Good to meet you " + userName + ".");
        document.getElementById("rockImg").src="images/rock_happy.png";
        setTimeout("document.getElementById('rockImg').src='images/rock.png';", 5000);
    }
}
