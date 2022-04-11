function checkCreds(){
    //obtaining the data
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    console.log("First Name: " + firstName);
    var lastName = document.getElementById("lName").value;
    console.log("Last Name: " +lastName);
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);
    var badgeNumb = document.getElementById("badgeID").value;
    console.log("The badge number is " + badgeNumb);

    //input validation for the name
    var nameLength = fullName.length;
    console.log("The length of the fullName varible is " + nameLength);

    if(nameLength > 20 || nameLength < 3){
        document.getElementById("loginStatus").innerHTML = "Invalid full name! Please try again.";
    } else if (badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number! Please try again.";        
    }else {
        document.getElementById("loginStatus").innerHTML = "Access granded, Welcome " + fullName;
        alert("Access granded, Welcome " + fullName);
        location.replace("./Operator Login.html");
    }
}