// Get the current date
now = new Date();
// Split into hours,minutes,seconds
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
// Display the time
document.write("<h2>");
document.write(hours + ":" + mins + ":" + secs);
document.write("</h2>");
// Display a greeting
document.write("<p>");
if (hours < 10) document.write("Good Morning.");
else if (hours >= 14 && hours <= 17) document.write("Good Afternoon.");
else if (hours > 17 && hours <=20) document.write("Good Evening.");
else if (hours > 20) document.write("Good Night.");
else document.write("Good Day.");
document.write("</p>");