function results(){
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    alert(processUserData);


}

function processUserData(){
    var day = parseInt(document.getElementById(day).value);
    var month = parseInt(document.getElementById(month).value);
    
    var year = document.getElementById(year).value;
    var century = parseInt(year.slice(0,2));
    var yearPrefix = parseInt(year.slice(2,4));

    var dayOfBirth = Math.floor(( ( (century/4) -2*century-1) + ((5*yearPrefix/4) ) + ((26*(month+1)/10)) + day )%7);
    return dayOfBirth;
}

