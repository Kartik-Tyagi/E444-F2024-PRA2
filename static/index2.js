
let currentDate = new Date()

let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date-time").innerHTML = `The local date and time is Friday, ${months[month]} ${day}, ${year} ${hours}:${minutes} PM.`;

function validateUofTEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(.*\.)?utoronto\.[a-zA-Z]+$/;
    return emailPattern.test(email);
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

let set = false;
let globalEmail = "";

document.querySelector("#submit").addEventListener("click", function () {
    let userName = document.getElementById("user").value;
    let email = document.getElementById("email").value;

    console.log(userName);

    if (userName == "") {
        alert("Please enter name");
    } else if (email == "") {
        alert("Please enter email");
    }

    if (set) {
        if (userName.split(' ').length == 2) {
            if (validateEmail(email)) {
                if (email == globalEmail) {
                    alert("Seems like you have the same email");
                } else {
                    alert("Seems like your email changed");
                }
            } else {
                alert("Enter a valid email");
            }
        } else {
            alert("Enter first and last names");
        }
    } else {
        let userName = userName.split(' ')[0];

        if (validateUofTEmail(email)) {
            set = true;
            document.getElementById("welcome").innerHTML = `Hello, ${userName}!`;
            document.getElementById("email-result").innerHTML = `You UofT email is ${email}`;
            globalEmail = email;
        } else {
            alert("Enter a valid UofT email address");
        }
    }
});