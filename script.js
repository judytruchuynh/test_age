function calculateAge() {
    var birthYear = parseInt(document.getElementById("birthYear").value);
    var birthMonth = parseInt(document.getElementById("birthMonth").value);
    var birthDay = parseInt(document.getElementById("birthDay").value);

    var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = "You are " + age + " years old.";
}