function results(){
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
   
    alert("Your Akan name is " + generateUserAkan());
}

function processUserData(){
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    
    var year = document.getElementById("year").value;
    var century = parseInt(year.slice(0,2));
    var yearPrefix = parseInt(year.slice(2,4));
    var dayOfBirth = Math.floor(( ( (century/4) -2*century-1) + ((5*yearPrefix/4) ) + ((26*(month+1)/10)) + day )%7);
    return dayOfBirth;

}

function generateUserAkan(){
    var genderId = document.getElementById("gender");
    var gender = genderId.options[genderId.selectedIndex].value;
    
    if(gender=="male"){
        return handleMaleNames(processUserData());
    }

    else{
        return handleFemaleNames(processUserData);
    }

}

function handleMaleNames(UserDayOfBirth){
    if (UserDayOfBirth ==0 ){
        return maleNames[0];
    }
    else if (UserDayOfBirth == 1){
        return maleNames[1];
    }
    else if (UserDayOfBirth == 2){
        return maleNames[2];
    }
    else if (UserDayOfBirth == 3){
        return maleNames[3];
    }
    else if (UserDayOfBirth == 4){
        return maleNames[4];
    }
    else if (UserDayOfBirth == 5){
        return maleNames[5];
    }
    else if (UserDayOfBirth == 6){
        return maleNames[6];
    }
}


function handleFemaleNames(UserDayOfBirth){
    if (UserDayOfBirth ==0 ){
        return femaleNames[0];
    }
    else if (UserDayOfBirth == 1){
        return femaleNames[1];
    }
    else if (UserDayOfBirth == 2){
        return femaleNames[2];
    }
    else if (UserDayOfBirth == 3){
        return femaleNames[3];
    }
    else if (UserDayOfBirth == 4){
        return femaleNames[4];
    }
    else if (UserDayOfBirth == 5){
        return femaleNames[5];
    }
    else if (UserDayOfBirth == 6){
        return femaleNames[6];
    }
}

