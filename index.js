/**
 * main function that will be called on html form submit
 */
function results() {
    alert("Your Akan name is " + generateUserAkan());
}

/**
 * get data inserted in the form
 */
function processUserData() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);

    var year = document.getElementById("year").value;
    var century = parseInt(year.slice(0, 2));
    var yearPrefix = parseInt(year.slice(2, 4));
    var dayOfBirth = Math.floor((((century / 4) - 2 * century - 1) + ((5 * yearPrefix / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
    return dayOfBirth;

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

