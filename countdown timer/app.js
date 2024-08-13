var DaysItem = document.getElementById("days");
var HoursItem = document.getElementById("hours");
var MinutesItem = document.getElementById("Minutes");
var SecondsItem = document.getElementById("second");

function countdown() {
   var futureDate = new Date("june 17, 2024 00:00:00");
var currentDate = new Date();
var myDate = futureDate - currentDate;
var days = Math.floor(myDate / 1000 / 60 / 60 / 24);
var hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
var Minutes = Math.floor(myDate / 1000 / 60) % 60;
var second = Math.floor(myDate / 1000) % 60;
DaysItem.innerHTML = days;
HoursItem.innerHTML = hours;
MinutesItem.innerHTML = Minutes;
SecondsItem.innerHTML = second;
if (myDate <= 0) {
    clearInterval(); // Stop the countdown
    DaysItem.innerHTML = '0';
    HoursItem.innerHTML = '0';
    MinutesItem.innerHTML = '0';
    SecondsItem.innerHTML = '0';
    return;
}

}

countdown();
setInterval(countdown, 1000);
