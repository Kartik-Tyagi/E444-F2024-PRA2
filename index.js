
let currentDate = new Date()

let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date-time").innerHTML = `The local date and time is Friday, ${months[month]} ${day}, ${year} ${hours}:${minutes} PM.`;