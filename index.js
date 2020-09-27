/**
 * main function that will be called on html form submit
 */
function results() {
    
    alert("Your Akan name is " + generateUserAkan());
}

/**
 * get data inserted in the form
 * @throws error when the day or month is not valid and stop the whole program
 */
function processUserData() {
    var day = parseInt(document.getElementById("day").value);

    if (day <= 0 || day > 31 ){
        alert("choose a valid day")
        throw new Error();
    }
    var month = parseInt(document.getElementById("month").value);

    if (month <= 0 || month > 12){
        alert("choose a valid Month")
        throw new Error();
    }

    var year = document.getElementById("year").value;

    if (year.length < 4){
        year = addZerosLeft(year);
        
    }

    var century = parseInt(year.slice(0, year.length-2));
    var yearEnd = parseInt(year.slice(year.length-2));
    var dayOfBirth = Math.floor((((century / 4) - 2 * century - 1) + ((5 * yearEnd / 4)) + ((26 * (month + 1) / 10)) + day) % 7);  
    return dayOfBirth;
}

/**
 * function take in a number (in string format ) and add 0 until it has 4 characters
 * @param numInStr is the string number to add zeros to 
 */
function addZerosLeft(numInStr) {
    while (numInStr.length < 4){
        numInStr = "0" + numInStr;
    }
    return numInStr;
}

/**
 * generating name corresponding to the gender inserted
 */
function generateUserAkan() {
    var genderId = document.getElementById("gender");
    var gender = genderId.options[genderId.selectedIndex].value;

    if (gender == "male") {
        return handleMaleNames(processUserData())
    }
    return handleFemaleNames(processUserData());
}

/**
 * handle name for males
 * @param UserDayOfBirth is day of birth of the user (0 is sunday) 
 */
function handleMaleNames(UserDayOfBirth) {
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    if (UserDayOfBirth === 0) {
        return maleNames[0];
    }
    else if (UserDayOfBirth === 1) {
        return maleNames[1];
    }
    else if (UserDayOfBirth === 2) {
        return maleNames[2];
    }
    else if (UserDayOfBirth === 3) {
        return maleNames[3];
    }
    else if (UserDayOfBirth === 4) {
        return maleNames[4];
    }
    else if (UserDayOfBirth === 5) {
        return maleNames[5];
    }
    else if (UserDayOfBirth === 6) {
        return maleNames[6];
    }
}

/**
 * handles female names
 * @param UserDayOfBirth is the day of birth
 */
function handleFemaleNames(UserDayOfBirth) {
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (UserDayOfBirth == 0) {
        return femaleNames[0];
    }
    else if (UserDayOfBirth === 1) {
        return femaleNames[1];
    }
    else if (UserDayOfBirth === 2) {
        return femaleNames[2];
    }
    else if (UserDayOfBirth === 3) {
        return femaleNames[3];
    }
    else if (UserDayOfBirth === 4) {
        return femaleNames[4];
    }
    else if (UserDayOfBirth === 5) {
        return femaleNames[5];
    }
    else if (UserDayOfBirth === 6) {
        return femaleNames[6];
    }
}

