// Declare date for start of coding journey
var myStartDate = "August 1, 2021 00:00:00";

// Calculate start date for display
var calcStartDate = new Date(myStartDate).getTime();

var idTimer = document.getElementById("timer").innerHTML;

// Conversion to milliseconds
var milliYear = 1000 * 60 * 60 * 24 * 365;
var milliDay = 1000 * 60 * 60 * 24;
var milliHour = 1000 * 60 * 60;
var milliMin = 1000 * 60;
var milliSec = 1000;

// Update timer every second
var timer = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate time diffrence from now and calcStartDate
    var timeDiff = now - calcStartDate;

    // Convert time difference to years, days, hours, minutes and seconds
    var years = Math.floor(timeDiff / (milliYear));

    var days = Math.floor((timeDiff % milliYear) / milliDay);
    
    var hours = Math.floor((timeDiff % milliDay) / milliHour);

    var minutes = Math.floor((timeDiff % milliHour) / milliMin);

    var seconds = Math.floor((timeDiff % milliMin) / milliSec);

    // Display time in HTML
    document.getElementById("timer").innerHTML = years + " years : " + days + " days : " + hours + " hours : " + minutes + " minutes : " + seconds + " seconds";

}, 1000); // Update every second (1000 milliseconds)